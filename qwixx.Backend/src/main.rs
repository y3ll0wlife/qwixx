mod models;
mod qwixx;
mod tests;

use models::{
    actions::{
        CreateRoomIn, CreateRoomOut, JoinRoomErrorOut, JoinRoomIn, MoveIn, MoveOut, PenaltyIn,
        PenaltyOut,
    },
    game_store::GameStore,
};
use qwixx::score::{get_penalty_score, get_row_score};
use socketioxide::{
    extract::{Data, SocketRef, State},
    SocketIo,
};
use tokio::main;
use tower::ServiceBuilder;
use tower_http::cors::CorsLayer;
use tracing::info;
use tracing_subscriber::FmtSubscriber;
use uuid::Uuid;

async fn on_connect(socket: SocketRef) {
    info!("socket connected: {}", socket.id);

    socket.on(
        "join",
        |socket: SocketRef, Data::<JoinRoomIn>(data), store: State<GameStore>| async move {
            println!("{:#?}", data);

            let response = JoinRoomErrorOut {
                message: String::from("Game code is invalid"),
            };

            // TODO add logic here

            let _ = socket.emit("join_room_error", response);
        },
    );

    socket.on(
        "create_room",
        |socket: SocketRef, Data::<CreateRoomIn>(data), store: State<GameStore>| async move {
            info!("Received create");
            let _ = socket.leave_all();

            let room_id = Uuid::new_v4().to_string();

            // TODO Support usernames here

            let response = CreateRoomOut {
                room_id,
                room_code: "ABC12".to_string(),
            };

            let _ = socket.join(response.room_id.clone());

            store
                .create_game_room(&response.room_id, &response.room_code, &socket.id)
                .await;

            let _ = socket.emit("create_room", response);
        },
    );

    socket.on(
        "move",
        |socket: SocketRef, Data::<MoveIn>(data), store: State<GameStore>| async move {
            info!("Received move: {:?}", data);

            let (updated_cell, row) = store.update_user_board(&socket.id, &data).await;

            let response = MoveOut {
                socket_id: socket.id.to_string(),
                color: data.color,
                points: get_row_score(&row),
                game_row: row,
                updated_cell,
            };

            let _ = socket.within(data.room).emit("move", response);
        },
    );

    socket.on(
        "penalty",
        |socket: SocketRef, Data::<PenaltyIn>(data), store: State<GameStore>| async move {
            info!("Received penalty: {:?}", data);

            let penalty_count = store.update_user_penalty(&socket.id, &data).await;

            let response = PenaltyOut {
                socket_id: socket.id.to_string(),
                points: get_penalty_score(&penalty_count),
            };

            let _ = socket.within(data.room).emit("penalty", response);
        },
    )
}

#[main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    tracing::subscriber::set_global_default(FmtSubscriber::default())?;

    let game_store = GameStore::default();
    let (layer, io) = SocketIo::builder().with_state(game_store).build_layer();

    io.ns("/", on_connect);

    let app = axum::Router::new().with_state(io).layer(
        ServiceBuilder::new()
            .layer(CorsLayer::permissive())
            .layer(layer),
    );
    let listener = tokio::net::TcpListener::bind("0.0.0.0:3000").await?;

    info!("Starting server...");

    axum::serve(listener, app).await?;

    Ok(())
}

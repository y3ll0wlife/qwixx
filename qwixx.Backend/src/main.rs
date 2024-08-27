mod models;
mod qwixx;
mod state;
mod tests;

use axum::routing::get;
use models::{
    game_store::GameStore,
    moves::{MoveIn, MoveOut},
};
use socketioxide::{
    extract::{Data, SocketRef, State},
    SocketIo,
};
use tokio::main;
use tower::ServiceBuilder;
use tower_http::cors::CorsLayer;
use tracing::info;
use tracing_subscriber::FmtSubscriber;

async fn on_connect(socket: SocketRef) {
    info!("socket connected: {}", socket.id);

    socket.on(
        "join",
        |socket: SocketRef, Data::<String>(room), store: State<GameStore>| async move {
            info!("Received join: {:?}", room);
            let _ = socket.leave_all();
            let _ = socket.join(room.clone());

            store.add_user_to_game(&room, &socket.id).await;
        },
    );

    socket.on(
        "move",
        |socket: SocketRef, Data::<MoveIn>(data), store: State<GameStore>| async move {
            info!("Received message: {:?}", data);

            let row = store.update_user_board(&socket.id, &data).await;

            let response = MoveOut {
                socket_id: socket.id.to_string(),
                color: data.color,
                game_row: row,
            };

            let _ = socket.within(data.room).emit("move", response);
        },
    )
}

async fn handler(axum::extract::State(io): axum::extract::State<SocketIo>) {
    info!("handler called");
    let _ = io.emit("hello", "world");
}

#[main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    tracing::subscriber::set_global_default(FmtSubscriber::default())?;

    let game_store = GameStore::default();
    let (layer, io) = SocketIo::builder().with_state(game_store).build_layer();

    io.ns("/", on_connect);

    let app = axum::Router::new()
        .route("/", get(|| async { "Hello, World!" }))
        .route("/hello", get(handler))
        .with_state(io)
        .layer(
            ServiceBuilder::new()
                .layer(CorsLayer::permissive())
                .layer(layer),
        );
    let listener = tokio::net::TcpListener::bind("0.0.0.0:3000").await?;

    info!("Starting server...");

    axum::serve(listener, app).await?;

    Ok(())
}

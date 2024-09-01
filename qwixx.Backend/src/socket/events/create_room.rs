use crate::{
    store::{game_store::GameStore, session_store::SessionStore},
    utils::code_generation,
};
use serde::{Deserialize, Serialize};
use socketioxide::extract::{Data, SocketRef, State};
use tracing::info;
use uuid::Uuid;

#[derive(Debug, Deserialize, Clone)]
pub struct CreateRoomIn {
    pub username: String,
}

#[derive(Debug, Serialize, Clone)]
pub struct CreateRoomOut {
    pub room_id: Uuid,
    pub room_code: String,
    pub token: String,
    pub user_id: Uuid,
}

pub async fn handle_create_room(
    socket: SocketRef,
    data: Data<CreateRoomIn>,
    store: State<GameStore>,
    session_store: State<SessionStore>,
) {
    let data = data.0;

    let _ = socket.leave_all();

    let room_id = Uuid::new_v4();
    info!("Socket {} created room {}", socket.id, room_id);

    let user = session_store
        .insert(&data.username, &socket.id, &room_id)
        .await;

    let response = CreateRoomOut {
        room_id, //? Technically a collision can happen here but I doubt it will ever happen
        room_code: code_generation::generate_game_code(),
        token: user.token,
        user_id: user.id,
    };

    let _ = socket.join(response.room_id.to_string());

    store
        .create_or_join_game_room(&response.room_id, &response.room_code, &user.id)
        .await;

    let _ = socket.emit("create_room", response);
}

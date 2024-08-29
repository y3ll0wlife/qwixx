use crate::{models::game_store::GameStore, utils::code_generation::generate_game_code};
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
    pub room_id: String,
    pub room_code: String,
}

pub async fn handle_create_room(
    socket: SocketRef,
    data: Data<CreateRoomIn>,
    store: State<GameStore>,
) {
    let data = data.0;

    info!("Received create");
    let _ = socket.leave_all();

    let room_id = Uuid::new_v4().to_string();

    // TODO Support usernames here

    let response = CreateRoomOut {
        room_id, //? Technically a collision can happen here but I doubt it will ever happen
        room_code: generate_game_code(),
    };

    let _ = socket.join(response.room_id.clone());

    store
        .create_or_join_game_room(&response.room_id, &response.room_code, &socket.id)
        .await;

    let _ = socket.emit("create_room", response);
}

use serde::{Deserialize, Serialize};
use socketioxide::extract::{Data, SocketRef, State};
use tracing::info;
use uuid::Uuid;

use crate::store::{game_store::GameStore, session_store::SessionStore};

#[derive(Debug, Deserialize, Clone)]
pub struct JoinRoomIn {
    pub code: String,

    pub username: String,
}

#[derive(Debug, Serialize, Clone)]
pub struct JoinRoomOut {
    #[serde(rename(serialize = "roomId"))]
    pub room_id: Uuid,

    #[serde(rename(serialize = "roomCode"))]
    pub room_code: String,

    pub token: String,

    #[serde(rename(serialize = "userId"))]
    pub user_id: Uuid,

    #[serde(rename(serialize = "roomCreatorId"))]
    pub room_creator_id: Uuid,
}

#[derive(Debug, Serialize, Clone)]
pub struct JoinRoomErrorOut {
    pub message: String,
}

pub async fn handle_join_room(
    socket: SocketRef,
    data: Data<JoinRoomIn>,
    store: State<GameStore>,
    session_store: State<SessionStore>,
) {
    let data = data.0;

    let _ = socket.leave_all();

    if data.username.len() > 15 {
        return;
    }

    match store.find_room_from_code(&data.code.to_uppercase()).await {
        Some(room) => {
            info!(
                "Socket {} joined game room with code {} (room id: {})",
                socket.id, data.code, room.id
            );

            let user = session_store
                .insert(&data.username, &socket.id, &room.id)
                .await;

            let response = JoinRoomOut {
                room_code: room.code.clone(),
                room_id: room.id,
                token: user.token,
                user_id: user.id,
                room_creator_id: room.creator_user_id,
            };

            let _ = socket.join(room.id.to_string());

            store
                .create_or_join_game_room(&response.room_id, &response.room_code, &user.id)
                .await;

            let _ = socket.emit("join_room", response);
        }
        None => {
            info!(
                "Socket {} tried to join game room with code {} (invalid)",
                socket.id, data.code
            );

            let response = JoinRoomErrorOut {
                message: String::from("Game code is invalid"),
            };

            let _ = socket.emit("join_room_error", response);
        }
    }
}

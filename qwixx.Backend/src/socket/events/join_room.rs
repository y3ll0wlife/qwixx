use crate::models::game_store::GameStore;
use serde::{Deserialize, Serialize};
use socketioxide::extract::{Data, SocketRef, State};

#[derive(Debug, Deserialize, Clone)]
pub struct JoinRoomIn {
    pub code: String,
    pub username: String,
}

#[derive(Debug, Serialize, Clone)]
pub struct JoinRoomOut {
    pub room_id: String,
    pub room_code: String,
}

#[derive(Debug, Serialize, Clone)]
pub struct JoinRoomErrorOut {
    pub message: String,
}

pub async fn handle_join_room(socket: SocketRef, data: Data<JoinRoomIn>, store: State<GameStore>) {
    let data = data.0;

    let _ = socket.leave_all();

    match store.find_room_from_code(&data.code).await {
        Some(room) => {
            let response = JoinRoomOut {
                room_code: room.code.clone(),
                room_id: room.id.clone(),
            };

            let _ = socket.join(room.id.clone());

            store
                .create_or_join_game_room(&response.room_id, &response.room_code, &socket.id)
                .await;

            let _ = socket.emit("join_room", response);
        }
        None => {
            let response = JoinRoomErrorOut {
                message: String::from("Game code is invalid"),
            };

            let _ = socket.emit("join_room_error", response);
        }
    }
}

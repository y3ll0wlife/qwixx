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

pub async fn handle_join(socket: SocketRef, data: Data<JoinRoomIn>, store: State<GameStore>) {
    let data = data.0;

    println!("{:#?}", data);

    let response = JoinRoomErrorOut {
        message: String::from("Game code is invalid"),
    };

    // TODO add logic here

    let _ = socket.emit("join_room_error", response);
}

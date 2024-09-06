use serde::Serialize;
use socketioxide::extract::SocketRef;
use uuid::Uuid;

#[derive(Debug, Serialize, Clone)]
pub struct ClearTokenOut {}

pub async fn send_clear_token(socket: &SocketRef, room_id: &Uuid) {
    let _ = socket
        .within(room_id.to_string())
        .emit("clear_token", ClearTokenOut {});
}

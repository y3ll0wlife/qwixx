use socketioxide::extract::SocketRef;
use tracing::info;

use crate::socket::events::{
    create_room::handle_create_room, join_room::handle_join_room, penalty::handle_penalty,
    r#move::handle_move, reconnect::handle_reconnect,
};

pub async fn on_connect(socket: SocketRef) {
    info!("Socket connected {}", socket.id);

    socket.on("join_room", handle_join_room);

    socket.on("create_room", handle_create_room);

    socket.on("move", handle_move);

    socket.on("penalty", handle_penalty);

    socket.on("reconnect", handle_reconnect);
}

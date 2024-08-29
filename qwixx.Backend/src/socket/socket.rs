use crate::socket::events::{
    create_room::handle_create_room, join::handle_join, penalty::handle_penalty,
    r#move::handle_move,
};
use socketioxide::extract::SocketRef;
use tracing::info;

pub async fn on_connect(socket: SocketRef) {
    info!("socket connected: {}", socket.id);

    socket.on("join", handle_join);

    socket.on("create_room", handle_create_room);

    socket.on("move", handle_move);

    socket.on("penalty", handle_penalty)
}

use crate::{
    models::{cell::Cell, game_store::GameStore},
    qwixx::score::get_row_score,
};
use serde::{Deserialize, Serialize};
use socketioxide::extract::{Data, SocketRef, State};
use tracing::info;

#[derive(Debug, Deserialize, Clone)]
pub struct MoveIn {
    pub room: String,
    pub color: String,
    pub number: usize,
}

#[derive(Debug, Serialize, Clone)]
pub struct MoveOut {
    pub socket_id: String,
    pub color: String,
    pub game_row: Vec<Cell>,
    pub points: usize,
    pub updated_cell: Cell,
}

pub async fn handle_move(socket: SocketRef, data: Data<MoveIn>, store: State<GameStore>) {
    let data = data.0;

    info!(
        "Socket {} sent move: C{}-N{}",
        socket.id, data.color, data.color
    );

    let (updated_cell, row) = store.update_user_board(&socket.id, &data).await;

    let response = MoveOut {
        socket_id: socket.id.to_string(),
        color: data.color,
        points: get_row_score(&row),
        game_row: row,
        updated_cell,
    };

    let _ = socket.within(data.room).emit("move", response);
}

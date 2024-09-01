use crate::{
    models::{cell::Cell, jwt::JwtTokenClaims},
    qwixx::score,
    store::game_store::GameStore,
    utils::jwt,
};
use serde::{Deserialize, Serialize};
use socketioxide::extract::{Data, SocketRef, State};
use tracing::info;
use uuid::Uuid;

#[derive(Debug, Deserialize, Clone)]
pub struct MoveIn {
    pub room: Uuid,
    pub color: String,
    pub number: usize,
    pub token: String,
}

#[derive(Debug, Serialize, Clone)]
pub struct MoveOut {
    pub user: JwtTokenClaims,
    pub color: String,
    pub game_row: Vec<Cell>,
    pub points: usize,
    pub updated_cell: Cell,
}

pub async fn handle_move(socket: SocketRef, data: Data<MoveIn>, store: State<GameStore>) {
    let data = data.0;

    let validate_token = jwt::validate_token(&data.token);
    if validate_token.is_none() {
        return;
    }

    let token_claims = validate_token.unwrap();

    info!(
        "Socket {} sent move: {} {}",
        socket.id, data.color, data.number
    );

    let (updated_cell, row) = store.update_user_board(&token_claims.id, &data).await;

    let response = MoveOut {
        user: token_claims,
        color: data.color,
        points: score::get_row_score(&row),
        game_row: row,
        updated_cell,
    };

    let _ = socket.within(data.room.to_string()).emit("move", response);
}

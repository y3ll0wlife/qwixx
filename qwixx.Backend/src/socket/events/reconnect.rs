use crate::{
    models::{cell::Cell, jwt::JwtTokenClaims},
    qwixx::score,
    socket::events::join_room::JoinRoomOut,
    store::{game_store::GameStore, session_store::SessionStore},
    utils::jwt,
};
use serde::{Deserialize, Serialize};
use socketioxide::extract::{Data, SocketRef, State};
use tracing::info;
use uuid::Uuid;

#[derive(Debug, Deserialize, Clone)]
pub struct ReconnectIn {
    pub token: String,
}

#[derive(Debug, Serialize, Clone)]
pub struct ReconnectOutBoard {
    #[serde(rename(serialize = "creatorUserId"))]
    pub creator_user_id: Uuid,

    pub user: JwtTokenClaims,

    #[serde(rename(serialize = "redRow"))]
    pub red_row: Vec<Cell>,

    #[serde(rename(serialize = "redPoints"))]
    pub red_points: usize,

    #[serde(rename(serialize = "yellowRow"))]
    pub yellow_row: Vec<Cell>,

    #[serde(rename(serialize = "yellowPoints"))]
    pub yellow_points: usize,

    #[serde(rename(serialize = "greenRow"))]
    pub green_row: Vec<Cell>,

    #[serde(rename(serialize = "greenPoints"))]
    pub green_points: usize,

    #[serde(rename(serialize = "blueRow"))]
    pub blue_row: Vec<Cell>,

    #[serde(rename(serialize = "bluePoints"))]
    pub blue_points: usize,

    #[serde(rename(serialize = "penaltyScore"))]
    pub penalty_score: usize,
}

pub async fn handle_reconnect(
    socket: SocketRef,
    data: Data<ReconnectIn>,
    store: State<GameStore>,
    session_store: State<SessionStore>,
) {
    let data = data.0;

    let validate_token = jwt::validate_token(&data.token);
    if validate_token.is_none() {
        return;
    }

    let token_claims = validate_token.unwrap();

    info!("Socket {} sent reconnect", socket.id);

    let user = session_store.get(&token_claims.id).await;
    if user.is_none() {
        return;
    }
    let user = user.unwrap();

    let room = store.find_room_from_id(&user.room_id).await;
    if room.is_none() {
        return;
    }
    let room = room.unwrap();

    if room.has_ended {
        return;
    }

    let response = JoinRoomOut {
        room_code: room.code,
        room_id: room.id,
        token: user.token,
        user_id: user.id,
        room_creator_id: room.creator_user_id,
    };

    let _ = socket.join(room.id.to_string());
    let _ = socket.emit("join_room", response);

    let board = room.boards.get(&user.id);
    if board.is_none() {
        return;
    }
    let board = board.unwrap();

    let response = ReconnectOutBoard {
        creator_user_id: room.creator_user_id,
        user: token_claims,
        red_points: score::get_row_score(&board.red_row),
        yellow_points: score::get_row_score(&board.yellow_row),
        green_points: score::get_row_score(&board.green_row),
        blue_points: score::get_row_score(&board.blue_row),
        red_row: board.red_row.clone(),
        yellow_row: board.yellow_row.clone(),
        green_row: board.green_row.clone(),
        blue_row: board.blue_row.clone(),
        penalty_score: score::get_penalty_score(&board.penalty_count),
    };

    let _ = socket
        .within(room.id.to_string())
        .emit("restore_board", response);
}

use super::cell::Cell;
use serde::{Deserialize, Serialize};

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

#[derive(Debug, Deserialize, Clone)]
pub struct PenaltyIn {
    pub room: String,
    pub removed: bool,
}

#[derive(Debug, Serialize, Clone)]
pub struct PenaltyOut {
    pub socket_id: String,
    pub points: usize,
}

#[derive(Debug, Deserialize, Clone)]
pub struct CreateRoomIn {
    pub username: String,
}

#[derive(Debug, Serialize, Clone)]
pub struct CreateRoomOut {
    pub room_id: String,
    pub room_code: String,
}

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

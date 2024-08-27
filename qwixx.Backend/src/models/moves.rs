use serde::{Deserialize, Serialize};

use crate::state::Cell;

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
}

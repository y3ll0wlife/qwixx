use serde::Serialize;
use socketioxide::socket::Sid;
use std::collections::HashMap;

use super::game_board::GameBoard;

#[derive(Serialize, Clone, Debug, Default)]
pub struct Game {
    pub boards: HashMap<Sid, GameBoard>,
}

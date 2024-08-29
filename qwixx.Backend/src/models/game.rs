use serde::Serialize;
use socketioxide::socket::Sid;
use std::collections::HashMap;

use super::game_board::GameBoard;

#[derive(Serialize, Clone, Debug, Default)]
pub struct Game {
    pub id: String,
    pub code: String,
    pub boards: HashMap<Sid, GameBoard>,
}

impl Game {
    pub fn initialize(id: String, code: String) -> Game {
        Game {
            id,
            code,
            ..Default::default()
        }
    }
}

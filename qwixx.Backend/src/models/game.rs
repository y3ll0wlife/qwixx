use super::game_board::GameBoard;
use serde::Serialize;
use std::collections::HashMap;
use uuid::Uuid;

#[derive(Serialize, Clone, Debug, Default)]
pub struct Game {
    pub id: Uuid,
    pub code: String,
    pub has_ended: bool,
    pub creator_user_id: Uuid,
    pub boards: HashMap<Uuid, GameBoard>,
}

impl Game {
    pub fn initialize(id: Uuid, code: String, creator_user_id: Uuid) -> Game {
        Game {
            id,
            code,
            has_ended: false,
            creator_user_id,
            ..Default::default()
        }
    }
}

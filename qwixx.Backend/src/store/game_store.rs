use crate::{
    models::{
        cell::Cell,
        game::Game,
        game_board::GameBoard,
        game_end_result::{GameEndResult, Scoreboard},
    },
    qwixx::score::{get_penalty_score, get_row_score},
    socket::events::{penalty::PenaltyIn, r#move::MoveIn},
};
use socketioxide::extract::State;
use std::{
    collections::{hash_map::Entry, HashMap},
    sync::Arc,
};
use tokio::sync::RwLock;
use uuid::Uuid;

use super::session_store::SessionStore;

// HashMap<Room_Id, Game>
pub type RoomStore = HashMap<Uuid, Game>;

#[derive(Default, Clone)]
pub struct GameStore {
    pub rooms: Arc<RwLock<RoomStore>>,
}

impl GameStore {
    pub async fn find_room_from_code(&self, room_code: &String) -> Option<Game> {
        let binding = self.rooms.read().await;

        binding
            .clone()
            .into_iter()
            .find(|(_id, room)| &room.code == room_code)
            .map(|(_id, game)| game)
    }

    pub async fn find_room_from_id(&self, id: &Uuid) -> Option<Game> {
        let binding = self.rooms.read().await;

        binding.get(id).cloned()
    }

    pub async fn end_game(
        &self,
        room_id: &Uuid,
        session_store: &State<SessionStore>,
    ) -> GameEndResult {
        let mut binding = self.rooms.write().await;

        let game = binding
            .iter_mut()
            .find(|(_id, room)| &room.id == room_id)
            .map(|(_id, game)| game)
            .expect("Failed to find game");

        game.has_ended = true;

        let mut scoreboard: Vec<Scoreboard> = vec![];

        for (id, board) in game.boards.iter() {
            let user = session_store
                .get(id)
                .await
                .expect("Failed to find user from id");

            let mut score = Scoreboard {
                username: user.username,
                placement: 0,
                red_points: get_row_score(&board.red_row),
                yellow_points: get_row_score(&board.yellow_row),
                green_points: get_row_score(&board.green_row),
                blue_points: get_row_score(&board.blue_row),
                penalties: get_penalty_score(&board.penalty_count),
                total_points: 0,
            };

            score.total_points = score.red_points as i64
                + score.yellow_points as i64
                + score.green_points as i64
                + score.blue_points as i64
                - score.penalties as i64;

            scoreboard.push(score)
        }

        scoreboard.sort_by_key(|sb| sb.total_points);
        scoreboard.reverse();

        for (i, sb) in scoreboard.iter_mut().enumerate() {
            sb.placement = i + 1;
        }

        GameEndResult { scoreboard }
    }

    pub async fn create_or_join_game_room(
        &self,
        room_id: &Uuid,
        room_code: &String,
        user_id: &Uuid,
    ) {
        let mut binding = self.rooms.write().await;
        let game = match binding.entry(*room_id) {
            Entry::Occupied(entry) => entry.into_mut(),
            Entry::Vacant(entry) => {
                entry.insert(Game::initialize(*room_id, room_code.to_string(), *user_id))
            }
        };

        let board = GameBoard::default();
        game.boards.insert(*user_id, board);
    }

    pub async fn update_user_board(
        &self,
        user_id: &Uuid,
        data: &MoveIn,
    ) -> Option<(Cell, Vec<Cell>)> {
        let mut binding = self.rooms.write().await;
        let game = binding.entry(data.room_id).or_default();

        if game.has_ended {
            return None;
        }

        let board = game
            .boards
            .get_mut(user_id)
            .expect("Failed to find board from user id");

        let row: &mut Vec<Cell> = match data.color.as_str() {
            "Red" => board.red_row.as_mut(),
            "Yellow" => board.yellow_row.as_mut(),
            "Green" => board.green_row.as_mut(),
            "Blue" => board.blue_row.as_mut(),
            _ => panic!("Invalid color"),
        };

        for cell in row.iter_mut() {
            cell.disabled = false;
        }

        let clicked_number_row = row.clone();
        let clicked_numbers = clicked_number_row
            .iter()
            .filter(|x| x.clicked)
            .collect::<Vec<&Cell>>();

        let cell_to_update = row
            .iter_mut()
            .find(|cell| cell.number == data.number)
            .unwrap();
        cell_to_update.clicked = !cell_to_update.clicked;

        let updated_cell = cell_to_update.clone();

        if cell_to_update.clicked {
            for cell in row.iter_mut() {
                cell.disabled = true;

                if cell.number == data.number {
                    cell.disabled = false;
                    break;
                }
            }
        } else if !cell_to_update.clicked && clicked_numbers.len() > 1 {
            let last_clicked = clicked_numbers.get(clicked_numbers.len() - 2).unwrap();

            for cell in row.iter_mut() {
                cell.disabled = true;

                if cell.number == last_clicked.number {
                    cell.disabled = false;
                    break;
                }
            }
        }

        let amount_of_clicked_cells = row.iter().filter(|x| x.clicked).count();
        if amount_of_clicked_cells < 5 {
            row.last_mut().unwrap().disabled = true;
        }

        Some((updated_cell, row.clone()))
    }

    pub async fn update_user_penalty(&self, user_id: &Uuid, data: &PenaltyIn) -> Option<usize> {
        let mut binding = self.rooms.write().await;
        let game = binding.entry(data.room_id).or_default();

        if game.has_ended {
            return None;
        }

        let board = game
            .boards
            .get_mut(user_id)
            .expect("Failed to find board from user id");

        if data.removed {
            board.penalty_count -= 1;
        } else {
            board.penalty_count += 1;
        }

        Some(board.penalty_count)
    }
}

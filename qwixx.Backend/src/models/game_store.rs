use super::{cell::Cell, game::Game, game_board::GameBoard};
use crate::socket::events::{penalty::PenaltyIn, r#move::MoveIn};
use socketioxide::socket::Sid;
use std::{
    collections::{hash_map::Entry, HashMap},
    sync::Arc,
};
use tokio::sync::RwLock;

pub type RoomStore = HashMap<String, Game>;

#[derive(Default, Clone)]
pub struct GameStore {
    pub rooms: Arc<RwLock<RoomStore>>,
}

impl GameStore {
    pub async fn find_room_from_code(&self, room_code: &String) -> Option<Game> {
        let binding = self.rooms.read().await;

        match binding
            .clone()
            .into_iter()
            .find(|(_id, room)| &room.code == room_code)
        {
            Some((_id, game)) => Some(game),
            None => None,
        }
    }

    pub async fn create_or_join_game_room(
        &self,
        room_id: &String,
        room_code: &String,
        socket_id: &Sid,
    ) {
        let mut binding = self.rooms.write().await;
        let game = match binding.entry(room_id.clone()) {
            Entry::Occupied(entry) => entry.into_mut(),
            Entry::Vacant(entry) => {
                entry.insert(Game::initialize(room_id.to_string(), room_code.to_string()))
            }
        };

        let board = GameBoard::default();
        game.boards.insert(socket_id.clone(), board);
    }

    pub async fn update_user_board(&self, socket_id: &Sid, data: &MoveIn) -> (Cell, Vec<Cell>) {
        let mut binding = self.rooms.write().await;
        let game = binding.entry(data.room.clone()).or_default();

        let board = game
            .boards
            .get_mut(socket_id)
            .expect("Failed to find board from socket id");

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

        (updated_cell, row.clone())
    }

    pub async fn update_user_penalty(&self, socket_id: &Sid, data: &PenaltyIn) -> usize {
        let mut binding = self.rooms.write().await;
        let game = binding.entry(data.room.clone()).or_default();

        let board = game
            .boards
            .get_mut(socket_id)
            .expect("Failed to find board from socket id");

        if data.removed {
            board.penalty_count -= 1;
        } else {
            board.penalty_count += 1;
        }

        board.penalty_count
    }
}

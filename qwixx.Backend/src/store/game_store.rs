use crate::{
    models::{cell::Cell, game::Game, game_board::GameBoard},
    socket::events::{penalty::PenaltyIn, r#move::MoveIn},
};
use socketioxide::socket::Sid;
use std::{
    collections::{hash_map::Entry, HashMap},
    sync::Arc,
};
use tokio::sync::RwLock;
use uuid::Uuid;

// HashMap<Room_Id, Game>
pub type RoomStore = HashMap<Uuid, Game>;

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
        room_id: &Uuid,
        room_code: &String,
        user_id: &Uuid,
    ) {
        let mut binding = self.rooms.write().await;
        let game = match binding.entry(room_id.clone()) {
            Entry::Occupied(entry) => entry.into_mut(),
            Entry::Vacant(entry) => {
                entry.insert(Game::initialize(room_id.clone(), room_code.to_string()))
            }
        };

        let board = GameBoard::default();
        game.boards.insert(user_id.clone(), board);
    }

    pub async fn update_user_board(&self, user_id: &Uuid, data: &MoveIn) -> (Cell, Vec<Cell>) {
        let mut binding = self.rooms.write().await;
        let game = binding.entry(data.room.clone()).or_default();

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

        (updated_cell, row.clone())
    }

    pub async fn update_user_penalty(&self, user_id: &Uuid, data: &PenaltyIn) -> usize {
        let mut binding = self.rooms.write().await;
        let game = binding.entry(data.room.clone()).or_default();

        let board = game
            .boards
            .get_mut(user_id)
            .expect("Failed to find board from socket id");

        if data.removed {
            board.penalty_count -= 1;
        } else {
            board.penalty_count += 1;
        }

        board.penalty_count
    }
}

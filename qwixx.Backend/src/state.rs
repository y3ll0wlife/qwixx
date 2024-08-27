use serde::Serialize;
use socketioxide::socket::Sid;
use std::{collections::HashMap, sync::Arc};
use tokio::sync::RwLock;

use crate::MoveIn;

pub type RoomStore = HashMap<String, Game>;

#[derive(Default, Clone)]
pub struct GameStore {
    pub rooms: Arc<RwLock<RoomStore>>,
}

#[derive(Serialize, Clone, Debug, Default)]
pub struct Game {
    pub boards: HashMap<Sid, GameBoard>,
}

#[derive(Serialize, Clone, Debug)]
pub struct GameBoard {
    pub red_row: Vec<Cell>,
    pub yellow_row: Vec<Cell>,
    pub green_row: Vec<Cell>,
    pub blue_row: Vec<Cell>,
}

impl Default for GameBoard {
    fn default() -> GameBoard {
        let mut red_yellow: Vec<Cell> = vec![];
        let mut green_blue: Vec<Cell> = vec![];

        for number in 2..13 {
            let mut cell = Cell {
                number,
                disabled: false,
                clicked: false,
            };

            if number == 12 {
                cell.disabled = true;
            }

            red_yellow.push(cell);
        }

        for number in (2..13).rev() {
            let mut cell = Cell {
                number,
                disabled: false,
                clicked: false,
            };

            if number == 2 {
                cell.disabled = true;
            }

            green_blue.push(cell);
        }

        GameBoard {
            red_row: red_yellow.clone(),
            yellow_row: red_yellow.clone(),
            green_row: green_blue.clone(),
            blue_row: green_blue.clone(),
        }
    }
}

#[derive(Debug, Serialize, Clone)]
pub struct Cell {
    pub number: usize,
    pub disabled: bool,
    pub clicked: bool,
}

impl GameStore {
    /*
    pub async fn insert(&self, room: &String, message: Message) {
        let mut binding = self.games.write().await;
        let messages = binding.entry(room.clone()).or_default();
        messages.push_front(message);
        messages.truncate(20);
    } */

    pub async fn get(&self, room: &String) -> Game {
        self.rooms
            .read()
            .await
            .get(room)
            .cloned()
            .unwrap_or_default()
    }

    pub async fn add_user_to_game(&self, room: &String, socket_id: &Sid) {
        let mut binding = self.rooms.write().await;
        let game = binding.entry(room.clone()).or_default();

        let board = GameBoard::default();
        game.boards.insert(socket_id.clone(), board);
    }

    pub async fn update_user_board(&self, socket_id: &Sid, data: &MoveIn) -> Vec<Cell> {
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

        let amount_of_clicked_cells = row.iter().filter(|x| x.clicked).count();
        if amount_of_clicked_cells < 4 {
            row.last_mut().unwrap().disabled = true;
        }

        for cell in row.iter_mut() {
            cell.disabled = true;

            if cell.number == data.number {
                cell.clicked = !cell.clicked;
                cell.disabled = false;
                break;
            }
        }

        row.clone()
    }
}

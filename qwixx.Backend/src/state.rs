use serde::Serialize;
use socketioxide::socket::Sid;
use std::{borrow::BorrowMut, collections::HashMap, sync::Arc};
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
            red_yellow.push(Cell {
                number,
                disabled: false,
            });
        }

        for number in (2..13).rev() {
            green_blue.push(Cell {
                number,
                disabled: false,
            });
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

    pub async fn get_user_board(&self, room: &String, socket_id: &Sid) -> GameBoard {
        let game = self
            .rooms
            .read()
            .await
            .get(room)
            .cloned()
            .unwrap_or_default();

        match game.boards.get(socket_id) {
            Some(board) => board.clone(),
            None => {
                let mut binding = self.rooms.write().await;
                let game = binding.entry(room.clone()).or_default();

                let board = GameBoard::default();
                game.boards.insert(socket_id.clone(), board.clone());

                board
            }
        }
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

        let board = game.boards.get_mut(socket_id).unwrap();

        let mut row = match data.color.as_str() {
            "Red" => board.red_row.clone(),
            "Yellow" => board.yellow_row.clone(),
            "Green" => board.green_row.clone(),
            "Blue" => board.blue_row.clone(),
            _ => panic!("Invalid color"),
        };

        let cell = row
            .iter_mut()
            .find(|cell| cell.number == data.number)
            .expect("Cell does not exist in the row");

        cell.disabled = !cell.disabled;

        println!("{:#?}", cell);
        println!("{:#?}", row);
        row
    }
}

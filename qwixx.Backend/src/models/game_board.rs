use super::cell::Cell;
use serde::Serialize;

#[derive(Serialize, Clone, Debug)]
pub struct GameBoard {
    pub red_row: Vec<Cell>,
    pub yellow_row: Vec<Cell>,
    pub green_row: Vec<Cell>,
    pub blue_row: Vec<Cell>,
    pub penalty_count: usize,
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
            penalty_count: 0,
        }
    }
}

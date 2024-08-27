#[cfg(test)]
mod score_tests {
    use crate::models::game_board::GameBoard;

    #[test]
    fn test_default_creation() {
        let board = GameBoard::default();

        assert_eq!(board.red_row.len(), 11);
        assert_eq!(board.yellow_row.len(), 11);
        assert_eq!(board.green_row.len(), 11);
        assert_eq!(board.blue_row.len(), 11);

        assert_eq!(board.red_row.first().unwrap().number, 2);
        assert_eq!(board.red_row.last().unwrap().number, 12);

        assert_eq!(board.yellow_row.first().unwrap().number, 2);
        assert_eq!(board.yellow_row.last().unwrap().number, 12);

        assert_eq!(board.green_row.first().unwrap().number, 12);
        assert_eq!(board.green_row.last().unwrap().number, 2);

        assert_eq!(board.blue_row.first().unwrap().number, 12);
        assert_eq!(board.blue_row.last().unwrap().number, 2);

        assert_eq!(board.red_row.first().unwrap().disabled, false);
        assert_eq!(board.red_row.last().unwrap().disabled, true);

        assert_eq!(board.yellow_row.first().unwrap().disabled, false);
        assert_eq!(board.yellow_row.last().unwrap().disabled, true);

        assert_eq!(board.green_row.first().unwrap().disabled, false);
        assert_eq!(board.green_row.last().unwrap().disabled, true);

        assert_eq!(board.blue_row.first().unwrap().disabled, false);
        assert_eq!(board.blue_row.last().unwrap().disabled, true);
    }
}

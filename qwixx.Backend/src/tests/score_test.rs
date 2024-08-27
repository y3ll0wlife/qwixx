#[cfg(test)]
mod score_tests {
    use crate::{qwixx::score::get_row_score, state::Cell};

    #[test]
    fn test_zero_clicked() {
        let cells: Vec<Cell> = vec![Cell {
            number: 2,
            clicked: false,
            disabled: false,
        }];

        let score = get_row_score(&cells);

        assert_eq!(score, 0)
    }

    #[test]
    fn test_one_clicked() {
        let cells: Vec<Cell> = vec![
            Cell {
                number: 2,
                clicked: true,
                disabled: false,
            },
            Cell {
                number: 3,
                clicked: false,
                disabled: false,
            },
        ];

        let score = get_row_score(&cells);

        assert_eq!(score, 1)
    }

    #[test]
    fn test_last_bonus_clicked_12() {
        let cells: Vec<Cell> = vec![
            Cell {
                number: 2,
                clicked: true,
                disabled: false,
            },
            Cell {
                number: 3,
                clicked: true,
                disabled: false,
            },
            Cell {
                number: 4,
                clicked: true,
                disabled: false,
            },
            Cell {
                number: 5,
                clicked: true,
                disabled: false,
            },
            Cell {
                number: 6,
                clicked: true,
                disabled: false,
            },
            Cell {
                number: 7,
                clicked: true,
                disabled: false,
            },
            Cell {
                number: 8,
                clicked: true,
                disabled: false,
            },
            Cell {
                number: 9,
                clicked: true,
                disabled: false,
            },
            Cell {
                number: 10,
                clicked: true,
                disabled: false,
            },
            Cell {
                number: 11,
                clicked: true,
                disabled: false,
            },
            Cell {
                number: 12,
                clicked: true,
                disabled: false,
            },
        ];

        let score = get_row_score(&cells);

        assert_eq!(score, 78)
    }

    #[test]
    fn test_last_bonus_clicked_2() {
        let cells: Vec<Cell> = vec![
            Cell {
                number: 12,
                clicked: true,
                disabled: false,
            },
            Cell {
                number: 11,
                clicked: true,
                disabled: false,
            },
            Cell {
                number: 10,
                clicked: true,
                disabled: false,
            },
            Cell {
                number: 9,
                clicked: true,
                disabled: false,
            },
            Cell {
                number: 8,
                clicked: true,
                disabled: false,
            },
            Cell {
                number: 7,
                clicked: true,
                disabled: false,
            },
            Cell {
                number: 6,
                clicked: true,
                disabled: false,
            },
            Cell {
                number: 5,
                clicked: true,
                disabled: false,
            },
            Cell {
                number: 4,
                clicked: true,
                disabled: false,
            },
            Cell {
                number: 3,
                clicked: true,
                disabled: false,
            },
            Cell {
                number: 2,
                clicked: true,
                disabled: false,
            },
        ];

        let score = get_row_score(&cells);

        assert_eq!(score, 78)
    }
}

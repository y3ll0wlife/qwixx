use crate::models::cell::Cell;

pub fn get_row_score(row: &[Cell]) -> usize {
    let last_cell = row.last().unwrap();

    let mut clicked = row.iter().filter(|x| x.clicked).count();
    let is_lock_clicked = row
        .iter()
        .any(|x| x.clicked && x.number == last_cell.number);

    if is_lock_clicked {
        clicked += 1;
    }

    match clicked {
        0 => 0,
        1 => 1,
        2 => 3,
        3 => 6,
        4 => 10,
        5 => 15,
        6 => 21,
        7 => 28,
        8 => 36,
        9 => 45,
        10 => 55,
        11 => 66,
        12 => 78,
        _ => 0,
    }
}

pub fn get_penalty_score(count: &usize) -> usize {
    match count {
        1 => 5,
        2 => 10,
        3 => 15,
        4 => 20,
        _ => 0,
    }
}

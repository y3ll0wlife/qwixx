use serde::Serialize;

#[derive(Debug, Serialize, Clone)]
pub struct Cell {
    pub number: usize,
    pub disabled: bool,
    pub clicked: bool,
}

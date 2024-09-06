use serde::Serialize;

#[derive(Clone, Debug, Default, Serialize)]
pub struct GameEndResult {
    pub scoreboard: Vec<Scoreboard>,
}

#[derive(Clone, Debug, Default, Serialize)]
pub struct Scoreboard {
    pub username: String,
    pub placement: usize,
    pub total_points: i64,
    pub red_points: usize,
    pub yellow_points: usize,
    pub green_points: usize,
    pub blue_points: usize,
    pub penalties: usize,
}

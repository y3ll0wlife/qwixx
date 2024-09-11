use serde::Serialize;

#[derive(Clone, Debug, Default, Serialize)]
pub struct GameEndResult {
    pub scoreboard: Vec<Scoreboard>,
}

#[derive(Clone, Debug, Default, Serialize)]
pub struct Scoreboard {
    pub username: String,

    pub placement: usize,

    #[serde(rename(serialize = "totalPoints"))]
    pub total_points: i64,

    #[serde(rename(serialize = "redPoints"))]
    pub red_points: usize,

    #[serde(rename(serialize = "yellowPoints"))]
    pub yellow_points: usize,

    #[serde(rename(serialize = "greenPoints"))]
    pub green_points: usize,

    #[serde(rename(serialize = "bluePoints"))]
    pub blue_points: usize,

    pub penalties: usize,
}

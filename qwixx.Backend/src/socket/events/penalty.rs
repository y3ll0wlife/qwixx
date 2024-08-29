use crate::{models::game_store::GameStore, qwixx::score::get_penalty_score};
use serde::{Deserialize, Serialize};
use socketioxide::extract::{Data, SocketRef, State};
use tracing::info;

#[derive(Debug, Deserialize, Clone)]
pub struct PenaltyIn {
    pub room: String,
    pub removed: bool,
}

#[derive(Debug, Serialize, Clone)]
pub struct PenaltyOut {
    pub socket_id: String,
    pub points: usize,
}

pub async fn handle_penalty(socket: SocketRef, data: Data<PenaltyIn>, store: State<GameStore>) {
    let data = data.0;

    info!("Received penalty: {:?}", data);

    let penalty_count = store.update_user_penalty(&socket.id, &data).await;

    let response = PenaltyOut {
        socket_id: socket.id.to_string(),
        points: get_penalty_score(&penalty_count),
    };

    let _ = socket.within(data.room).emit("penalty", response);
}

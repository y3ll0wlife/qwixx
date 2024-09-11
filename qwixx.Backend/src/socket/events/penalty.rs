use crate::{models::jwt::JwtTokenClaims, qwixx::score, store::game_store::GameStore, utils::jwt};
use serde::{Deserialize, Serialize};
use socketioxide::extract::{Data, SocketRef, State};
use tracing::info;
use uuid::Uuid;

#[derive(Debug, Deserialize, Clone)]
pub struct PenaltyIn {
    #[serde(rename(deserialize = "roomId"))]
    pub room_id: Uuid,

    pub removed: bool,

    pub token: String,
}

#[derive(Debug, Serialize, Clone)]
pub struct PenaltyOut {
    pub user: JwtTokenClaims,

    pub points: usize,
}

pub async fn handle_penalty(socket: SocketRef, data: Data<PenaltyIn>, store: State<GameStore>) {
    let data = data.0;

    let validate_token = jwt::validate_token(&data.token);
    if validate_token.is_none() {
        return;
    }

    let token_claims = validate_token.unwrap();

    info!(
        "Socket {} sent penalty: removed {}",
        socket.id, data.removed
    );

    let penalty_count = store.update_user_penalty(&token_claims.id, &data).await;
    if penalty_count.is_none() {
        return;
    }

    let response = PenaltyOut {
        user: token_claims,
        points: score::get_penalty_score(&penalty_count.unwrap()),
    };

    let _ = socket
        .within(data.room_id.to_string())
        .emit("penalty", response);
}

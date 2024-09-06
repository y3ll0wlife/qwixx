use crate::{
    models::game_end_result::GameEndResult,
    store::{game_store::GameStore, session_store::SessionStore},
    utils::jwt,
};
use serde::{Deserialize, Serialize};
use socketioxide::extract::{Data, SocketRef, State};
use tracing::info;
use uuid::Uuid;

#[derive(Debug, Deserialize, Clone)]
pub struct EndGameIn {
    pub room: Uuid,
    pub token: String,
}

#[derive(Debug, Serialize, Clone)]
pub struct EndGameOut {
    pub result: GameEndResult,
}

pub async fn handle_end_game(
    socket: SocketRef,
    data: Data<EndGameIn>,
    store: State<GameStore>,
    session_store: State<SessionStore>,
) {
    let data = data.0;
    let validate_token = jwt::validate_token(&data.token);
    if validate_token.is_none() {
        return;
    }
    let token_claims = validate_token.unwrap();

    let room = store.find_room_from_id(&data.room).await;
    if room.is_none() {
        return;
    }
    let room = room.unwrap();

    if room.creator_user_id != token_claims.id {
        return;
    }

    if room.has_ended {
        return;
    }

    let results = store.end_game(&data.room, &session_store).await;

    println!("{:#?}", results);

    info!("Socket {} end game {}", socket.id, room.id);

    let response = EndGameOut { result: results };

    let _ = socket
        .within(data.room.to_string())
        .emit("end_game", response);
}

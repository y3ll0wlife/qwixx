use serde::Serialize;
use socketioxide::socket::Sid;
use uuid::Uuid;

use crate::utils::jwt;

#[derive(Serialize, Clone, Debug, Default)]
pub struct User {
    pub id: Uuid,
    pub socket_id: Sid,
    pub username: String,
    pub room_id: Uuid,
    pub token: String,
}

impl User {
    pub fn initialize(username: String, socket_id: Sid, room_id: Uuid) -> User {
        let mut user = User {
            id: Uuid::new_v4(),
            socket_id,
            username,
            room_id,
            token: String::new(),
        };

        user.token = jwt::create_token(&user);

        user
    }
}

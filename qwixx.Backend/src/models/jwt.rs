use serde::{Deserialize, Serialize};
use uuid::Uuid;

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct JwtTokenClaims {
    pub id: Uuid,
    pub username: String,
}

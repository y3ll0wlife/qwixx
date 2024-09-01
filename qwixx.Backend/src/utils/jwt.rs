use crate::models::{jwt::JwtTokenClaims, user::User};
use jwt_simple::{
    claims::Claims,
    prelude::{Duration, HS256Key, MACLike},
};
use std::env;

pub fn create_token(user: &User) -> String {
    let secret = env::var("JWT_SECRET").expect("Missing JWT_SECRET in environment");
    let key = HS256Key::from_bytes(secret.as_bytes());

    let my_additional_data = JwtTokenClaims {
        id: user.id,
        username: user.username.clone(),
    };

    let claims = Claims::with_custom_claims(my_additional_data, Duration::from_hours(24));
    key.authenticate(claims).unwrap()
}

pub fn validate_token(token: &str) -> Option<JwtTokenClaims> {
    let secret = env::var("JWT_SECRET").expect("Missing JWT_SECRET in environment");
    let key = HS256Key::from_bytes(secret.as_bytes());

    match key.verify_token::<JwtTokenClaims>(token, None) {
        Ok(claims) => Some(claims.custom),
        Err(_err) => None,
    }
}

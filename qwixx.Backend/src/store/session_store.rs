use crate::models::user::User;
use socketioxide::socket::Sid;
use std::{collections::HashMap, sync::Arc};
use tokio::sync::RwLock;
use uuid::Uuid;

// HashMap<User_Id, Game>
pub type UserStore = HashMap<Uuid, User>;

#[derive(Default, Clone)]
pub struct SessionStore {
    pub users: Arc<RwLock<UserStore>>,
}

impl SessionStore {
    #[allow(dead_code)]
    pub async fn debug(&self) {
        #[allow(unused_mut)]
        let mut binding = self.users.read().await;

        for (id, user) in binding.iter() {
            println!("{} -> {:#?}", id, user);
        }
        println!("Currently {} users in the session", binding.len())
    }

    pub async fn insert(&self, username: &String, socket_id: &Sid, room_id: &Uuid) -> User {
        let mut binding = self.users.write().await;
        let user = User::initialize(username.to_string(), *socket_id, *room_id);
        binding.insert(user.id, user.clone());

        user
    }

    pub async fn get(&self, user_id: &Uuid) -> Option<User> {
        let binding = self.users.read().await;

        binding.get(user_id).cloned()
    }
}

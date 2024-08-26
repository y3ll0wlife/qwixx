use serde::Serialize;
use std::{
    collections::{HashMap, VecDeque},
    sync::Arc,
};
use tokio::sync::RwLock;

#[derive(Default, Clone)]
pub struct MessageStore {
    pub messages: Arc<RwLock<RoomStore>>,
}

pub type RoomStore = HashMap<String, VecDeque<Message>>;

#[derive(Serialize, Clone, Debug)]
pub struct Message {
    pub text: String,
    pub user: String,
    pub date: chrono::DateTime<chrono::Utc>,
}

impl MessageStore {
    pub async fn insert(&self, room: &String, message: Message) {
        let mut binding = self.messages.write().await;
        let messages = binding.entry(room.clone()).or_default();
        messages.push_front(message);
        messages.truncate(20);
    }

    pub async fn get(&self, room: &String) -> Vec<Message> {
        let messages = self.messages.read().await.get(room).cloned();
        messages.unwrap_or_default().into_iter().rev().collect()
    }
}

mod models;
mod qwixx;
mod socket;
mod store;
mod tests;
mod utils;

use dotenv::dotenv;
use socket::socket_handler::on_connect;
use socketioxide::SocketIo;
use store::{game_store::GameStore, session_store::SessionStore};
use tokio::main;
use tower::ServiceBuilder;
use tower_http::cors::CorsLayer;
use tracing::info;

#[main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    dotenv().ok();

    tracing_subscriber::fmt()
        .with_max_level(tracing::Level::DEBUG)
        .with_target(false)
        .init();

    let (layer, io) = SocketIo::builder()
        .with_state(SessionStore::default())
        .with_state(GameStore::default())
        .build_layer();

    io.ns("/", on_connect);

    let app = axum::Router::new().with_state(io).layer(
        ServiceBuilder::new()
            .layer(CorsLayer::permissive())
            .layer(layer),
    );
    let listener = tokio::net::TcpListener::bind("0.0.0.0:3000").await?;

    info!("Starting server...");

    axum::serve(listener, app).await?;

    Ok(())
}

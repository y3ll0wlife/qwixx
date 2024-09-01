mod models;
mod qwixx;
mod socket;
mod store;
mod tests;
mod utils;

use dotenv::dotenv;
use socket::socket::on_connect;
use socketioxide::SocketIo;
use store::{game_store::GameStore, session_store::SessionStore};
use tokio::main;
use tower::ServiceBuilder;
use tower_http::cors::CorsLayer;
use tracing::info;
use tracing_subscriber::FmtSubscriber;

#[main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    dotenv().ok();

    tracing::subscriber::set_global_default(FmtSubscriber::default())?;

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

#![warn(
    missing_debug_implementations,
    rust_2018_idioms,
    unreachable_pub,
    unused_crate_dependencies,
    unsafe_op_in_unsafe_fn
)]
#![warn(clippy::all, clippy::pedantic)]
#![allow(
    clippy::must_use_candidate,
    clippy::return_self_not_must_use,
    clippy::module_name_repetitions,
    clippy::no_effect_underscore_binding,
    clippy::unused_self
)]

mod database;
mod entity;
mod graphql;
mod model;
mod repo;

use database::{DbState, init_db};
pub use graphql::export_schema_sdl;
use graphql::{GraphqlInput, GraphqlResponse, SchemaState};
use std::sync::atomic::{AtomicBool, Ordering};
use tauri::{AppHandle, Manager, State};

static APP_READY: AtomicBool = AtomicBool::new(false);

#[tauri::command]
fn is_app_ready() -> bool {
    APP_READY.load(Ordering::Acquire)
}

#[tauri::command]
async fn graphql_execute(
    db: State<'_, DbState>,
    schema_state: State<'_, SchemaState>,
    input: GraphqlInput,
) -> Result<GraphqlResponse, String> {
    graphql::graphql_request(db.inner().clone(), schema_state.0.clone(), input).await
}

/// rust启动入口
///
/// # Panics
/// Initialization failed
#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .setup(|app| {
            let handle = app.handle().clone();
            tauri::async_runtime::spawn(async move {
                match startup_init(handle).await {
                    Ok(()) => {
                        APP_READY.store(true, Ordering::Release);
                        println!("Initialization completed!");
                    }
                    Err(e) => eprintln!("Initialization failed: {e}"),
                }
            });
            Ok(())
        })
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![is_app_ready, graphql_execute])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

async fn startup_init(handle: AppHandle) -> Result<(), Box<dyn std::error::Error>> {
    let db_path = handle.path().app_data_dir().unwrap().join("app.db");
    let db_state = init_db(&db_path).await?;
    let schema_state = graphql::get_schema();
    handle.manage(db_state);
    handle.manage(schema_state);
    Ok(())
}

use crate::graphql::types::{AppConfig, AppConfigInput};
use crate::repo::app_repo;
use async_graphql::Result;
use sea_orm::DatabaseConnection;

pub(in super::super) async fn get_app_config(db: &DatabaseConnection) -> Result<AppConfig> {
    let list = app_repo::find_all(db).await?;
    Ok(AppConfig::from_items(list))
}

pub(in super::super) async fn update_app_config(
    db: &DatabaseConnection,
    input: AppConfigInput,
) -> Result<AppConfig> {
    let result = app_repo::batch_upsert_by_keys(db, input.to_hash_map()).await?;
    Ok(AppConfig::from_items(result))
}

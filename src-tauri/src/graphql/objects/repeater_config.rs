use crate::graphql::types::{RepeaterConfig, RepeaterConfigInput};
use crate::repo::config_repo;
use async_graphql::Result;
use sea_orm::DatabaseConnection;

const CONFIGTYPE: &str = "repeater";

pub(in super::super) async fn get_repeater_config(
    db: &DatabaseConnection,
) -> Result<RepeaterConfig> {
    let list = config_repo::find_all_by_type(db, CONFIGTYPE).await?;
    Ok(RepeaterConfig::from_items(list))
}

pub(in super::super) async fn update_repeater_config(
    db: &DatabaseConnection,
    input: RepeaterConfigInput,
) -> Result<RepeaterConfig> {
    let result = config_repo::batch_upsert_by_type_key(db, CONFIGTYPE, input.to_hash_map()).await?;
    Ok(RepeaterConfig::from_items(result))
}

use crate::graphql::types::{ProxyConfig, ProxyConfigInput};
use crate::repo::config_repo;
use async_graphql::*;
use sea_orm::DatabaseConnection;

const CONFIGTYPE: &str = "proxy";

pub async fn get_proxy_config(db: &DatabaseConnection) -> Result<ProxyConfig> {
    let list = config_repo::find_all_by_type(db, CONFIGTYPE).await?;
    Ok(ProxyConfig::from_items(list))
}

pub async fn update_proxy_config(
    db: &DatabaseConnection,
    input: ProxyConfigInput,
) -> Result<ProxyConfig> {
    let result = config_repo::batch_upsert_by_type_key(db, CONFIGTYPE, input.to_hash_map()).await?;
    Ok(ProxyConfig::from_items(result))
}

use super::utils;
use crate::model::ConfigItem;
use crate::repo::config_repo;
use async_graphql::*;
use sea_orm::DatabaseConnection;
use std::collections::HashMap;

#[derive(Clone, SimpleObject)]
pub struct ProxyConfig {
    pub listen_host: String,
    pub listen_port: u16,
    pub enable_ssl: bool,
    pub upstream_proxy: String,
    pub intercept_request: bool,
    pub intercept_response: bool,
}

#[derive(InputObject)]
pub struct ProxyConfigInput {
    pub listen_host: String,
    pub listen_port: u16,
    pub enable_ssl: bool,
    pub upstream_proxy: String,
    pub intercept_request: bool,
    pub intercept_response: bool,
}

pub async fn get_proxy_config(db: &DatabaseConnection) -> Result<ProxyConfig> {
    let list = config_repo::find_all_by_type(db, "proxy").await?;
    Ok(format(list))
}

pub async fn update_proxy_config(
    db: &DatabaseConnection,
    input: ProxyConfigInput,
) -> Result<ProxyConfig> {
    let mut map = HashMap::new();
    map.insert("listen_host".to_string(), Some(input.listen_host));
    map.insert(
        "listen_port".to_string(),
        Some(input.listen_port.to_string()),
    );
    map.insert("enable_ssl".to_string(), Some(input.enable_ssl.to_string()));
    map.insert("upstream_proxy".to_string(), Some(input.upstream_proxy));
    map.insert(
        "intercept_request".to_string(),
        Some(input.intercept_request.to_string()),
    );
    map.insert(
        "intercept_response".to_string(),
        Some(input.intercept_response.to_string()),
    );

    let result = config_repo::batch_upsert_by_type_key(db, "proxy", map).await?;
    Ok(format(result))
}

fn format(list: Vec<ConfigItem>) -> ProxyConfig {
    let map: HashMap<String, Option<String>> = list
        .into_iter()
        .map(|item| (item.key, item.value))
        .collect();

    let listen_host = utils::parse_str(&map, "listen_host", "127.0.0.1");
    let listen_port = utils::parse_num(&map, "listen_port", 8080u16);
    let enable_ssl = utils::parse_bool(&map, "enable_ssl", false);
    let upstream_proxy = utils::parse_str_or_empty(&map, "upstream_proxy");
    let intercept_request = utils::parse_bool(&map, "intercept_request", true);
    let intercept_response = utils::parse_bool(&map, "intercept_response", false);

    ProxyConfig {
        listen_host,
        listen_port,
        enable_ssl,
        upstream_proxy,
        intercept_request,
        intercept_response,
    }
}

use super::utils;
use crate::model::ConfigItem;
use async_graphql::{ID, Object};
use std::collections::HashMap;

pub(in super::super) struct ProxyConfig {
    pub listen_host: String,
    pub listen_port: u16,
    pub enable_ssl: bool,
    pub upstream_proxy: String,
    pub intercept_request: bool,
    pub intercept_response: bool,
}

#[Object]
impl ProxyConfig {
    async fn id(&self) -> ID {
        ID::from("proxy_config")
    }
    async fn listen_host(&self) -> &String {
        &self.listen_host
    }
    async fn listen_port(&self) -> u16 {
        self.listen_port
    }
    async fn enable_ssl(&self) -> bool {
        self.enable_ssl
    }
    async fn upstream_proxy(&self) -> &String {
        &self.upstream_proxy
    }
    async fn intercept_request(&self) -> bool {
        self.intercept_request
    }
    async fn intercept_response(&self) -> bool {
        self.intercept_response
    }
}

impl ProxyConfig {
    pub(in super::super) fn from_items(list: Vec<ConfigItem>) -> Self {
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

        Self {
            listen_host,
            listen_port,
            enable_ssl,
            upstream_proxy,
            intercept_request,
            intercept_response,
        }
    }
}

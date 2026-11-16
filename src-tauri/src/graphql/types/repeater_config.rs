use super::utils;
use super::{HeaderParamsItem, HttpMethod};
use crate::model::ConfigItem;
use async_graphql::*;
use std::collections::HashMap;
use std::str::FromStr;

pub struct RepeaterConfig {
    pub method: HttpMethod,
    pub url: String,
    pub headers: Vec<HeaderParamsItem>,
    pub params: Vec<HeaderParamsItem>,
    pub body: String,
    pub response: String,
}

#[Object]
impl RepeaterConfig {
    async fn id(&self) -> ID {
        ID::from("repeater_config")
    }
    async fn method(&self) -> HttpMethod {
        self.method
    }
    async fn url(&self) -> &String {
        &self.url
    }
    async fn headers(&self) -> &Vec<HeaderParamsItem> {
        &self.headers
    }
    async fn params(&self) -> &Vec<HeaderParamsItem> {
        &self.params
    }
    async fn body(&self) -> &String {
        &self.body
    }
    async fn response(&self) -> &String {
        &self.response
    }
}

impl RepeaterConfig {
    pub fn from_items(list: Vec<ConfigItem>) -> Self {
        let map: HashMap<String, Option<String>> = list
            .into_iter()
            .map(|item| (item.key, item.value))
            .collect();

        let method = match map.get("method") {
            Some(Some(v)) => HttpMethod::from_str(v).unwrap_or_default(),
            _ => HttpMethod::default(),
        };
        let url = utils::parse_str_or_empty(&map, "url");
        let headers = match map.get("headers") {
            Some(Some(json_str)) => {
                serde_json::from_str::<Vec<HeaderParamsItem>>(json_str).unwrap_or_default()
            }
            _ => Vec::new(),
        };
        let params = match map.get("params") {
            Some(Some(json_str)) => {
                serde_json::from_str::<Vec<HeaderParamsItem>>(json_str).unwrap_or_default()
            }
            _ => Vec::new(),
        };

        let body = utils::parse_str_or_empty(&map, "body");
        let response = utils::parse_str_or_empty(&map, "response");

        Self {
            method,
            url,
            headers,
            params,
            body,
            response,
        }
    }
}

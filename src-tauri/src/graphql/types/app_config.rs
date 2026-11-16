use super::ThemeMode;
use super::utils;
use crate::model::AppItem;
use async_graphql::*;
use std::collections::HashMap;
use std::str::FromStr;

pub struct AppConfig {
    pub theme_mode: ThemeMode,
    pub notification: bool,
}

#[Object]
impl AppConfig {
    async fn id(&self) -> ID {
        ID::from("app_config")
    }
    async fn theme_mode(&self) -> ThemeMode {
        self.theme_mode
    }
    async fn notification(&self) -> bool {
        self.notification
    }
}

impl AppConfig {
    pub fn from_items(list: Vec<AppItem>) -> Self {
        let map: HashMap<String, Option<String>> = list
            .into_iter()
            .map(|item| (item.key, item.value))
            .collect();

        let theme_mode = match map.get("theme_mode") {
            Some(Some(v)) => ThemeMode::from_str(v).unwrap_or_default(),
            _ => ThemeMode::default(),
        };
        let notification = utils::parse_bool(&map, "notification", false);

        Self {
            theme_mode,
            notification,
        }
    }
}

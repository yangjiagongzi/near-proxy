use super::utils;
use crate::model::AppItem;
use crate::repo::app_repo;
use async_graphql::ID;
use async_graphql::*;
use sea_orm::DatabaseConnection;
use std::collections::HashMap;

#[derive(Enum, Copy, Clone, Eq, PartialEq)]
pub enum ThemeMode {
    #[graphql(name = "dark")]
    Dark,
    #[graphql(name = "light")]
    Light,
    #[graphql(name = "system")]
    System,
}

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

#[derive(InputObject)]
pub struct AppConfigInput {
    pub theme_mode: ThemeMode,
    pub notification: bool,
}

pub async fn get_app_config(db: &DatabaseConnection) -> Result<AppConfig> {
    let list = app_repo::find_all(db).await?;
    Ok(format(list))
}

pub async fn update_app_config(
    db: &DatabaseConnection,
    input: AppConfigInput,
) -> Result<AppConfig> {
    let mut map = HashMap::new();
    map.insert(
        "theme_mode".to_string(),
        Some(match input.theme_mode {
            ThemeMode::Dark => "dark".to_string(),
            ThemeMode::Light => "light".to_string(),
            ThemeMode::System => "system".to_string(),
        }),
    );
    map.insert(
        "notification".to_string(),
        Some(input.notification.to_string()),
    );

    let result = app_repo::batch_upsert_by_keys(db, map).await?;
    Ok(format(result))
}

fn format(list: Vec<AppItem>) -> AppConfig {
    let map: HashMap<String, Option<String>> = list
        .into_iter()
        .map(|item| (item.key, item.value))
        .collect();

    let theme_mode = match map.get("theme_mode") {
        Some(Some(v)) if v == "dark" => ThemeMode::Dark,
        Some(Some(v)) if v == "light" => ThemeMode::Light,
        _ => ThemeMode::System,
    };

    let notification = utils::parse_bool(&map, "notification", false);

    AppConfig {
        theme_mode,
        notification,
    }
}

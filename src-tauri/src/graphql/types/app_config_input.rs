use super::ThemeMode;
use async_graphql::*;
use std::collections::HashMap;

#[derive(InputObject)]
pub struct AppConfigInput {
    pub theme_mode: ThemeMode,
    pub notification: bool,
}

impl AppConfigInput {
    pub fn to_hash_map(&self) -> HashMap<String, Option<String>> {
        let mut map = HashMap::new();
        map.insert(
            "theme_mode".to_string(),
            Some(self.theme_mode.as_str().to_string()),
        );
        map.insert(
            "notification".to_string(),
            Some(self.notification.to_string()),
        );
        map
    }
}

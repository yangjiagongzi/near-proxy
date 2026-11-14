use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ConfigItem {
    pub id: i64,
    pub r#type: String,
    pub key: String,
    pub value: Option<String>,
    pub update_at: i64,
    pub create_at: i64,
    pub is_deleted: i32,
}

impl From<crate::entity::config::Model> for ConfigItem {
    fn from(m: crate::entity::config::Model) -> Self {
        Self {
            id: m.id,
            r#type: m.r#type,
            key: m.key,
            value: m.value,
            update_at: m.update_at,
            create_at: m.create_at,
            is_deleted: m.is_deleted,
        }
    }
}

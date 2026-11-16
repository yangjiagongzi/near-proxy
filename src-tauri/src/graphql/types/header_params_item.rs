use async_graphql::*;
use serde::Deserialize;

#[derive(SimpleObject, Clone, Deserialize)]
pub struct HeaderParamsItem {
    pub id: String,
    pub key: String,
    pub value: String,
    pub enable: bool,
}

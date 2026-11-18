use async_graphql::SimpleObject;
use serde::Deserialize;

#[derive(SimpleObject, Clone, Deserialize)]
pub(in super::super) struct HeaderParamsItem {
    pub id: String,
    pub key: String,
    pub value: String,
    pub enable: bool,
}

use async_graphql::*;
use serde::Serialize;

#[derive(InputObject, Clone, Serialize)]
pub struct HeaderParamsItemInput {
    pub id: String,
    pub key: String,
    pub value: String,
    pub enable: bool,
}

use async_graphql::InputObject;
use serde::Serialize;

#[derive(InputObject, Clone, Serialize)]
pub(in super::super) struct HeaderParamsItemInput {
    pub id: String,
    pub key: String,
    pub value: String,
    pub enable: bool,
}

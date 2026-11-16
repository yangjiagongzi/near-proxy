use super::{HeaderParamsItemInput, HttpMethod};
use async_graphql::*;
use std::collections::HashMap;

#[derive(InputObject)]
pub struct RepeaterConfigInput {
    pub method: HttpMethod,
    pub url: String,
    pub headers: Vec<HeaderParamsItemInput>,
    pub params: Vec<HeaderParamsItemInput>,
    pub body: String,
}

impl RepeaterConfigInput {
    pub fn to_hash_map(&self) -> HashMap<String, Option<String>> {
        let mut map = HashMap::new();
        map.insert("method".to_string(), Some(self.method.as_str().to_string()));
        map.insert("url".to_string(), Some(self.url.clone()));

        let headers_str = serde_json::to_string(&self.headers).unwrap_or_else(|_| "[]".to_string());
        map.insert("headers".to_string(), Some(headers_str));

        let params_str = serde_json::to_string(&self.params).unwrap_or_else(|_| "[]".to_string());
        map.insert("params".to_string(), Some(params_str));
        map.insert("body".to_string(), Some(self.body.clone()));
        map
    }
}

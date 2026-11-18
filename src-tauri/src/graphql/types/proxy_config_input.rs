use async_graphql::InputObject;
use std::collections::HashMap;

#[derive(InputObject)]
pub(in super::super) struct ProxyConfigInput {
    pub listen_host: String,
    pub listen_port: u16,
    pub enable_ssl: bool,
    pub upstream_proxy: String,
    pub intercept_request: bool,
    pub intercept_response: bool,
}

impl ProxyConfigInput {
    pub(in super::super) fn to_hash_map(&self) -> HashMap<String, Option<String>> {
        let mut map = HashMap::new();
        map.insert("listen_host".to_string(), Some(self.listen_host.clone()));
        map.insert(
            "listen_port".to_string(),
            Some(self.listen_port.to_string()),
        );
        map.insert("enable_ssl".to_string(), Some(self.enable_ssl.to_string()));
        map.insert(
            "upstream_proxy".to_string(),
            Some(self.upstream_proxy.clone()),
        );
        map.insert(
            "intercept_request".to_string(),
            Some(self.intercept_request.to_string()),
        );
        map.insert(
            "intercept_response".to_string(),
            Some(self.intercept_response.to_string()),
        );
        map
    }
}

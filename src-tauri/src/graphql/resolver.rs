use super::AppSchema;
use crate::database::DbState;
use async_graphql::{Value as GqlValue, Variables};
use serde::Serialize;
use serde_json::Value;

pub async fn graphql_request(
    db: DbState,
    schema: AppSchema,
    input: GraphqlInput,
) -> Result<GraphqlResponse, String> {
    let gql_vars_value = GqlValue::from_json(input.variables)
        .map_err(|e| format!("convert variables failed: {e}"))?;
    let vars = Variables::from_value(gql_vars_value);

    let mut req = async_graphql::Request::new(input.query).variables(vars);
    if let Some(op_name) = input.operation_name {
        req = req.operation_name(op_name);
    }

    req = req.data(db);

    let gql_result = schema.execute(req).await;

    let data = gql_result.data.into_json().ok();
    let errors: Option<Vec<Value>> = if gql_result.errors.is_empty() {
        None
    } else {
        Some(
            gql_result
                .errors
                .iter()
                .map(|e| {
                    serde_json::json!({
                        "message": e.message,
                        "locations": e.locations,
                        "path": e.path
                    })
                })
                .collect(),
        )
    };

    Ok(GraphqlResponse { data, errors })
}

#[derive(serde::Deserialize, Debug)]
pub struct GraphqlInput {
    pub query: String,
    pub variables: serde_json::Value,
    #[serde(default)]
    pub operation_name: Option<String>,
}

#[derive(Serialize, Debug)]
pub struct GraphqlResponse {
    #[serde(skip_serializing_if = "Option::is_none")]
    pub data: Option<Value>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub errors: Option<Vec<Value>>,
}

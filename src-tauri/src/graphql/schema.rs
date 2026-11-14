use super::objects::app_config::{self, AppConfig, AppConfigInput};
use super::objects::proxy_config::{self, ProxyConfig, ProxyConfigInput};
use crate::database::DbState;
use async_graphql::*;

pub struct QueryRoot;

#[Object]
impl QueryRoot {
    async fn app_config(&self, ctx: &Context<'_>) -> Result<AppConfig> {
        let db = ctx.data::<DbState>()?;
        let cfg = app_config::get_app_config(&db.0).await?;
        Ok(cfg)
    }
    async fn proxy_config(&self, ctx: &Context<'_>) -> Result<ProxyConfig> {
        let db = ctx.data::<DbState>()?;
        let cfg = proxy_config::get_proxy_config(&db.0).await?;
        Ok(cfg)
    }
}

pub struct MutationRoot;

#[Object]
impl MutationRoot {
    pub async fn update_app_config(
        &self,
        ctx: &Context<'_>,
        input: AppConfigInput,
    ) -> Result<AppConfig> {
        let db = ctx.data::<DbState>()?;
        let cfg = app_config::update_app_config(&db.0, input).await?;
        Ok(cfg)
    }

    pub async fn update_proxy_config(
        &self,
        ctx: &Context<'_>,
        input: ProxyConfigInput,
    ) -> Result<ProxyConfig> {
        let db = ctx.data::<DbState>()?;
        let cfg = proxy_config::update_proxy_config(&db.0, input).await?;
        Ok(cfg)
    }
}

pub type AppSchema = Schema<QueryRoot, MutationRoot, EmptySubscription>;

fn build_schema() -> AppSchema {
    Schema::build(QueryRoot, MutationRoot, EmptySubscription).finish()
}

#[derive(Clone)]
pub struct SchemaState(pub AppSchema);

pub fn get_schema() -> SchemaState {
    SchemaState(build_schema())
}

pub fn export_schema_sdl() -> String {
    let schema = build_schema();
    schema.sdl()
}

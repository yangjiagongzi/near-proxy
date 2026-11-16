use async_graphql::*;
use std::str::FromStr;

#[derive(Enum, Copy, Clone, Eq, PartialEq, Debug)]
pub enum HttpMethod {
    #[graphql(name = "CONNECT")]
    Connect,
    #[graphql(name = "OPTIONS")]
    Options,
    #[graphql(name = "TRACE")]
    Trace,
    #[graphql(name = "HEAD")]
    Head,
    #[graphql(name = "GET")]
    Get,
    #[graphql(name = "POST")]
    Post,
    #[graphql(name = "PUT")]
    Put,
    #[graphql(name = "PATCH")]
    Patch,
    #[graphql(name = "DELETE")]
    Delete,
}

#[derive(Debug)]
pub struct ParseHttpMethodError;

impl std::fmt::Display for ParseHttpMethodError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "invalid http method")
    }
}

impl std::error::Error for ParseHttpMethodError {}

impl FromStr for HttpMethod {
    type Err = ParseHttpMethodError;
    fn from_str(s: &str) -> Result<Self, Self::Err> {
        match s {
            "CONNECT" => Ok(Self::Connect),
            "OPTIONS" => Ok(Self::Options),
            "TRACE" => Ok(Self::Trace),
            "HEAD" => Ok(Self::Head),
            "GET" => Ok(Self::Get),
            "POST" => Ok(Self::Post),
            "PUT" => Ok(Self::Put),
            "PATCH" => Ok(Self::Patch),
            "DELETE" => Ok(Self::Delete),
            _ => Err(ParseHttpMethodError),
        }
    }
}

impl Default for HttpMethod {
    fn default() -> Self {
        HttpMethod::Get
    }
}

impl HttpMethod {
    pub fn as_str(&self) -> &'static str {
        match self {
            HttpMethod::Connect => "CONNECT",
            HttpMethod::Options => "OPTIONS",
            HttpMethod::Trace => "TRACE",
            HttpMethod::Head => "HEAD",
            HttpMethod::Get => "GET",
            HttpMethod::Post => "POST",
            HttpMethod::Put => "PUT",
            HttpMethod::Patch => "PATCH",
            HttpMethod::Delete => "DELETE",
        }
    }
}

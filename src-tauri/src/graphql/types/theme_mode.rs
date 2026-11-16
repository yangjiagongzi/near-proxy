use async_graphql::*;
use std::str::FromStr;

#[derive(Enum, Copy, Clone, Eq, PartialEq, Debug)]
pub enum ThemeMode {
    #[graphql(name = "dark")]
    Dark,
    #[graphql(name = "light")]
    Light,
    #[graphql(name = "system")]
    System,
}

#[derive(Debug)]
pub struct ParseThemeModeError;

impl std::fmt::Display for ParseThemeModeError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "invalid theme mode")
    }
}

impl std::error::Error for ParseThemeModeError {}

impl FromStr for ThemeMode {
    type Err = ParseThemeModeError;

    fn from_str(s: &str) -> Result<Self, Self::Err> {
        match s {
            "dark" => Ok(Self::Dark),
            "light" => Ok(Self::Light),
            "system" => Ok(Self::System),
            _ => Err(ParseThemeModeError),
        }
    }
}

impl Default for ThemeMode {
    fn default() -> Self {
        ThemeMode::System
    }
}

impl ThemeMode {
    pub fn as_str(&self) -> &'static str {
        match self {
            ThemeMode::Dark => "dark",
            ThemeMode::Light => "light",
            ThemeMode::System => "system",
        }
    }
}

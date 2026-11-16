use std::{collections::HashMap, str::FromStr};

pub fn parse_bool(map: &HashMap<String, Option<String>>, key: &str, default: bool) -> bool {
    match map.get(key) {
        Some(Some(v)) => v.eq_ignore_ascii_case("true"),
        _ => default,
    }
}

pub fn parse_str(map: &HashMap<String, Option<String>>, key: &str, default: &str) -> String {
    match map.get(key) {
        Some(Some(v)) if !v.is_empty() => v.clone(),
        _ => default.to_string(),
    }
}

pub fn parse_str_or_empty(map: &HashMap<String, Option<String>>, key: &str) -> String {
    match map.get(key) {
        Some(Some(v)) if !v.is_empty() => v.clone(),
        _ => String::new(),
    }
}

pub fn parse_num<T>(map: &HashMap<String, Option<String>>, key: &str, default: T) -> T
where
    T: FromStr,
{
    match map.get(key) {
        Some(Some(v)) => v.parse().unwrap_or(default),
        _ => default,
    }
}

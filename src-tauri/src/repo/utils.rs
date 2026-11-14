use std::time::SystemTime;

pub fn date_now() -> i64 {
    SystemTime::now()
        .duration_since(std::time::SystemTime::UNIX_EPOCH)
        .unwrap()
        .as_secs() as i64
}

use std::time::SystemTime;

pub(super) fn date_now() -> i64 {
    SystemTime::now()
        .duration_since(std::time::SystemTime::UNIX_EPOCH)
        .unwrap()
        .as_secs()
        .try_into()
        .expect("unix timestamp exceeds i64::MAX")
}

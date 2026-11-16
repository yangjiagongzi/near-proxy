mod migration;

use migration::Migrator;
use sea_orm::{Database, DatabaseConnection, DbErr};
use sea_orm_migration::MigratorTrait;
use std::path::Path;

#[derive(Debug, Clone)]
pub struct DbState(pub DatabaseConnection);

pub async fn init_db(db_path: &Path) -> Result<DbState, DbErr> {
    let url = format!("sqlite://{}?mode=rwc", db_path.to_string_lossy());
    let conn = Database::connect(&url).await?;
    Migrator::up(&conn, None).await?;
    Ok(DbState(conn))
}

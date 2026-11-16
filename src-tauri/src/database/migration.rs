use sea_orm_migration::prelude::*;

#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .create_table(
                Table::create()
                    .table(App::Table)
                    .if_not_exists()
                    .col(
                        ColumnDef::new(App::Id)
                            .big_integer()
                            .not_null()
                            .auto_increment()
                            .primary_key(),
                    )
                    .col(ColumnDef::new(App::Key).string().not_null())
                    .col(ColumnDef::new(App::Value).string())
                    .col(ColumnDef::new(App::UpdateAt).big_integer().not_null())
                    .col(ColumnDef::new(App::CreateAt).big_integer().not_null())
                    .col(
                        ColumnDef::new(App::IsDeleted)
                            .integer()
                            .not_null()
                            .default(0),
                    )
                    .to_owned(),
            )
            .await?;
        manager
            .create_index(
                Index::create()
                    .name("idx_app_key")
                    .table(App::Table)
                    .col(App::Key)
                    .unique()
                    .if_not_exists()
                    .to_owned(),
            )
            .await?;
        manager
            .create_table(
                Table::create()
                    .table(Config::Table)
                    .if_not_exists()
                    .col(
                        ColumnDef::new(Config::Id)
                            .big_integer()
                            .not_null()
                            .auto_increment()
                            .primary_key(),
                    )
                    .col(ColumnDef::new(Config::Type).string().not_null())
                    .col(ColumnDef::new(Config::Key).string().not_null())
                    .col(ColumnDef::new(Config::Value).string())
                    .col(ColumnDef::new(Config::UpdateAt).big_integer().not_null())
                    .col(ColumnDef::new(Config::CreateAt).big_integer().not_null())
                    .col(
                        ColumnDef::new(Config::IsDeleted)
                            .integer()
                            .not_null()
                            .default(0),
                    )
                    .to_owned(),
            )
            .await?;
        manager
            .create_index(
                Index::create()
                    .name("idx_config_type_key")
                    .table(Config::Table)
                    .col(Config::Key)
                    .col(Config::Type)
                    .unique()
                    .if_not_exists()
                    .to_owned(),
            )
            .await?;
        Ok(())
    }

    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .drop_table(Table::drop().table(Config::Table).to_owned())
            .await?;
        manager
            .drop_table(Table::drop().table(App::Table).to_owned())
            .await
    }
}

pub struct Migrator;

#[async_trait::async_trait]
impl MigratorTrait for Migrator {
    fn migrations() -> Vec<Box<dyn MigrationTrait>> {
        vec![Box::new(Migration)]
    }
}

#[derive(DeriveIden)]
pub enum App {
    Table,
    Id,
    Key,
    Value,
    UpdateAt,
    CreateAt,
    IsDeleted,
}

#[derive(DeriveIden)]
pub enum Config {
    Table,
    Id,
    Type,
    Key,
    Value,
    UpdateAt,
    CreateAt,
    IsDeleted,
}

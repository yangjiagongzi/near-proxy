use super::utils;
use crate::entity::app::{ActiveModel, Column, Entity};
use crate::model::AppItem;
use sea_orm::{
    ColumnTrait, DatabaseConnection, DbErr, EntityTrait, QueryFilter, Set, sea_query::OnConflict,
};
use std::collections::HashMap;

pub async fn find_all(db: &DatabaseConnection) -> Result<Vec<AppItem>, DbErr> {
    let items = Entity::find()
        .filter(Column::IsDeleted.eq(0))
        .all(db)
        .await?
        .into_iter()
        .map(AppItem::from)
        .collect();
    Ok(items)
}

pub async fn batch_upsert_by_keys(
    db: &DatabaseConnection,
    map: HashMap<String, Option<String>>,
) -> Result<Vec<AppItem>, DbErr> {
    if map.is_empty() {
        return Ok(Vec::new());
    }
    let now = utils::date_now();

    let models: Vec<ActiveModel> = map
        .into_iter()
        .map(|(key, value)| ActiveModel {
            key: Set(key),
            value: Set(value),
            create_at: Set(now),
            update_at: Set(now),
            is_deleted: Set(0),
            ..Default::default()
        })
        .collect();

    let result = Entity::insert_many(models)
        .on_conflict(
            OnConflict::column(Column::Key)
                .update_columns([Column::Value, Column::UpdateAt])
                .to_owned(),
        )
        .exec_with_returning(db)
        .await?;

    let items: Vec<AppItem> = result.into_iter().map(AppItem::from).collect();
    Ok(items)
}

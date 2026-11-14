use super::utils;
use crate::entity::config::{ActiveModel, Column, Entity};
use crate::model::ConfigItem;
use sea_orm::{
    ColumnTrait, DatabaseConnection, DbErr, EntityTrait, ExprTrait, QueryFilter, Set,
    sea_query::OnConflict,
};
use std::collections::HashMap;

pub async fn find_all_by_type(
    db: &DatabaseConnection,
    r#type: &str,
) -> Result<Vec<ConfigItem>, DbErr> {
    let items = Entity::find()
        .filter(Column::Type.eq(r#type).and(Column::IsDeleted.eq(0)))
        .all(db)
        .await?
        .into_iter()
        .map(ConfigItem::from)
        .collect();
    Ok(items)
}

pub async fn batch_upsert_by_type_key(
    db: &DatabaseConnection,
    r#type: &str,
    map: HashMap<String, Option<String>>,
) -> Result<Vec<ConfigItem>, DbErr> {
    if map.is_empty() {
        return Ok(Vec::new());
    }
    let now = utils::date_now();
    let ty = String::from(r#type);

    let models: Vec<ActiveModel> = map
        .into_iter()
        .map(|(key, value)| ActiveModel {
            r#type: Set(ty.clone()),
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
            OnConflict::columns([Column::Type, Column::Key])
                .update_columns([Column::Value, Column::UpdateAt])
                .to_owned(),
        )
        .exec_with_returning(db)
        .await?;

    let items: Vec<ConfigItem> = result.into_iter().map(ConfigItem::from).collect();
    Ok(items)
}

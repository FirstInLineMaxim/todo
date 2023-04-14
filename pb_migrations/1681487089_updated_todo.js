migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("at9wtpddbloixdu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "epqn3i8h",
    "name": "checked",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("at9wtpddbloixdu")

  // remove
  collection.schema.removeField("epqn3i8h")

  return dao.saveCollection(collection)
})

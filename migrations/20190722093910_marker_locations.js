exports.up = function(knex) {
    return knex.schema.createTable('marker_locations', table => {
        table.increments('id').primary()
        table.decimal('latitude', 9, 6)
        table.decimal('longitude', 9, 6)
        table.string('description')
        table.string('markers')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('marker_locations')
  };

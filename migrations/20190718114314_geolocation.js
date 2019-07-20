exports.up = function(knex) {
  return knex.schema.createTable('geolocation', table => {
      table.increments('id').primary()
      table.integer('timestamp')
      table.decimal('latitude', 9, 6)
      table.decimal('longitude', 9, 6)
      table.decimal('latitude_rounded', 7, 4)
      table.decimal('longitude_rounded', 7, 4)
      table.string('user')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('geolocation')
};

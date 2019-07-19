
exports.up = function(knex) {
  return knex.schema.createTable('geolocation', table => {
      table.increments('id').primary()
      table.timestamp('timestamp').defaultTo(knex.fn.now())
      table.decimal('latitude')
      table.decimal('longitude')
      table.string('user')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('geolocation')
};


exports.up = function(knex) {
  return knex.schema.createTable('geolocation', table => {
      table.increments('id').primary()
      table.timestamp('timestamp')
      table.float('latitude')
      table.float('longitude')
      table.string('user')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('geolocation')
};

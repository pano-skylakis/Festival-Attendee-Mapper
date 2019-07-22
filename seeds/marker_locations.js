
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('marker_locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('marker_locations').insert([
        {id: 1, latitude: '-41.294132', longitude: '174.775354'},
        {id: 2, latitude: '-41.291847', longitude: '174.776518'},
        {id: 3, latitude: '-41.291846', longitude: '174.776516'}
      ]);
    });
};
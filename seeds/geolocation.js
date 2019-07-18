
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('geolocation').del()
    .then(function () {
      // Inserts seed entries
      return knex('geolocation').insert([
        {id: 1, timestamp: '159834934', latitude: '42.4535', longitude: '174.3434', user:'goku'},
        {id: 2, timestamp: '125984738', latitude: '42.5435', longitude: '174.2456', user:'vegeta'},
        {id: 3, timestamp: '159343840', latitude: '42.5644', longitude: '173.4343', user:'gohan'},
        {id: 4, timestamp: '159039403', latitude: '41.3433', longitude: '173.3433', user:'trunks'}
      ]);
    });
};

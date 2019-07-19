
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('geolocation').del()
    .then(function () {
      // Inserts seed entries
      return knex('geolocation').insert([
        {id: 1, latitude: '42.4535', longitude: '174.3434', timestamp:1563544800, user:'goku'},
        {id: 2, latitude: '42.5435', longitude: '174.2456', timestamp:1563545100, user:'vegeta'},
        {id: 3, latitude: '42.5644', longitude: '173.4343', timestamp:1563545400, user:'gohan'},
        {id: 4, latitude: '41.3433', longitude: '173.3433', timestamp:1563545700, user:'trunks'},
        {id: 5, latitude: '41.3433', longitude: '173.3433', timestamp:1563546000, user:'trunks'},
        {id: 6, latitude: '41.3433', longitude: '173.3433', timestamp:1563546300, user:'trunks'},
        {id: 7, latitude: '41.3433', longitude: '173.3433', timestamp:1563546600, user:'trunks'},
        {id: 8, latitude: '41.3433', longitude: '173.3433', timestamp:1563546900, user:'trunks'},
        {id: 9, latitude: '41.3433', longitude: '173.3433', timestamp:1563547200, user:'trunks'},
        {id: 10, latitude: '41.3433', longitude: '173.3433', timestamp:1563547500, user:'trunks'},
        {id: 11, latitude: '41.3433', longitude: '173.3433', timestamp:1563547800, user:'trunks'},
        {id: 12, latitude: '41.3433', longitude: '173.3433', timestamp:1563548100, user:'trunks'},
        {id: 13, latitude: '41.3433', longitude: '173.3433', timestamp:1563548400, user:'trunks'},
        {id: 14, latitude: '41.3433', longitude: '173.3433', timestamp:1563549000, user:'trunks'},
        {id: 15, latitude: '41.3433', longitude: '173.3433', timestamp:1563549300, user:'trunks'},
        {id: 16, latitude: '41.3433', longitude: '173.3433', timestamp:1563549600, user:'trunks'},
        {id: 17, latitude: '41.3433', longitude: '173.3433', timestamp:1563549900, user:'trunks'},
        {id: 18, latitude: '41.3433', longitude: '173.3433', timestamp:1563550200, user:'trunks'},
        {id: 19, latitude: '41.3433', longitude: '173.3433', timestamp:1563550500, user:'trunks'},
        {id: 20, latitude: '41.3433', longitude: '173.3433', timestamp:1563550800, user:'trunks'},
        {id: 21, latitude: '41.3433', longitude: '173.3433', timestamp:1563551100, user:'trunks'},
        {id: 22, latitude: '41.3433', longitude: '173.3433', timestamp:1563551400, user:'trunks'},
        {id: 23, latitude: '41.3433', longitude: '173.3433', timestamp:1563551700, user:'trunks'},
        {id: 24, latitude: '41.3433', longitude: '173.3433', timestamp:1563552000, user:'trunks'}
      ]);
    });
};


























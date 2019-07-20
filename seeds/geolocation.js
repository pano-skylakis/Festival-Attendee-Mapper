
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('geolocation').del()
    .then(function () {
      // Inserts seed entries
      return knex('geolocation').insert([
        {id: 1, latitude: '-41.291847', longitude: '174.776518', latitude_rounded: '-41.2918', longitude_rounded: '174.3657', user:'goku'},
        {id: 2, latitude: '-41.291847', longitude: '174.776518', latitude_rounded: '-41.2918', longitude_rounded: '174.3657', user:'goku'},
        {id: 3, latitude: '-41.291847', longitude: '174.776518', latitude_rounded: '-41.2918', longitude_rounded: '174.3657', user:'goku'},
        {id: 4, latitude: '-41.291847', longitude: '174.776518', latitude_rounded: '-41.2918', longitude_rounded: '174.3657', user:'goku'},
        {id: 5, latitude: '-41.294132', longitude: '174.775354', latitude_rounded: '-41.2941', longitude_rounded: '174.7753', user:'trunks'},
        {id: 6, latitude: '-41.294132', longitude: '174.775354', latitude_rounded: '-41.2941', longitude_rounded: '174.7753', user:'trunks'},
        {id: 7, latitude: '-41.294132', longitude: '174.775354', latitude_rounded: '-41.2941', longitude_rounded: '174.7753', user:'trunks'},
        {id: 8, latitude: '-41.294132', longitude: '174.775354', latitude_rounded: '-41.2941', longitude_rounded: '174.7753', user:'trunks'},
        {id: 9, latitude: '-41.294132', longitude: '174.775354', latitude_rounded: '-41.2941', longitude_rounded: '174.7753', user:'trunks'},
      ]);
    });
};



exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('geolocation').del()
    .then(function () {
      // Inserts seed entries
      return knex('geolocation').insert([
        {id: 1, timestamp: '1563703200', latitude: '-41.291847', longitude: '174.776518', latitude_rounded: '-41.2918', longitude_rounded: '174.3657', user:'goku'},
        {id: 2, timestamp: '1563636800', latitude: '-41.291847', longitude: '174.776518', latitude_rounded: '-41.2918', longitude_rounded: '174.3657', user:'goku'},
        {id: 3, timestamp: '1563640620', latitude: '-41.291847', longitude: '174.776518', latitude_rounded: '-41.2918', longitude_rounded: '174.3657', user:'goku'},
        {id: 4, timestamp: '1563644220', latitude: '-41.291847', longitude: '174.776518', latitude_rounded: '-41.2918', longitude_rounded: '174.3657', user:'goku'},
        {id: 5, timestamp: '1563647820', latitude: '-41.294132', longitude: '174.775354', latitude_rounded: '-41.2941', longitude_rounded: '174.7753', user:'trunks'},
        {id: 6, timestamp: '1563651420', latitude: '-41.294132', longitude: '174.775354', latitude_rounded: '-41.2941', longitude_rounded: '174.7753', user:'trunks'},
        {id: 7, timestamp: '1563655020', latitude: '-41.294132', longitude: '174.775354', latitude_rounded: '-41.2941', longitude_rounded: '174.7753', user:'trunks'},
        {id: 8, timestamp: '1563658620', latitude: '-41.294132', longitude: '174.775354', latitude_rounded: '-41.2941', longitude_rounded: '174.7753', user:'trunks'},
        {id: 9, timestamp: '1563662220', latitude: '-41.294132', longitude: '174.775354', latitude_rounded: '-41.2941', longitude_rounded: '174.7753', user:'trunks'},
      ]);
    });
};


























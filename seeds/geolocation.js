
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('geolocation').del()
    .then(function () {

      let seedData = []
      for(let i = 0; i<50; i++){
        seedData.push({id:i, timestamp: Date.now(), latitude: -41.2974457, longitude: 174.7743361, latitude_rounded: -41.2974, longitude_rounded: 174.7743, user: 'Ben'})
      }
      for(let i = 50; i<100; i++){
        seedData.push({id:i, timestamp: Date.now(), latitude: -41.2970434, longitude: 174.774214, latitude_rounded: -41.2970, longitude_rounded: 174.7742, user: 'Pano'})
      }
      // Inserts seed entries
      return knex('geolocation').insert(seedData);
    });
};






// {id: 1, timestamp: '1563631020', latitude: '-41.291847', longitude: '174.776518', latitude_rounded: '-41.2918', longitude_rounded: '174.3657', user:'goku'},
//         {id: 2, timestamp: '1563634020', latitude: '-41.291847', longitude: '174.776518', latitude_rounded: '-41.2918', longitude_rounded: '174.3657', user:'goku'},
//         {id: 3, timestamp: '1563637020', latitude: '-41.291847', longitude: '174.776518', latitude_rounded: '-41.2918', longitude_rounded: '174.3657', user:'goku'},
//         {id: 4, timestamp: '1563640020', latitude: '-41.291847', longitude: '174.776518', latitude_rounded: '-41.2918', longitude_rounded: '174.3657', user:'goku'},
//         {id: 5, timestamp: '1563643020', latitude: '-41.294132', longitude: '174.775354', latitude_rounded: '-41.2941', longitude_rounded: '174.7753', user:'trunks'},
//         {id: 6, timestamp: '1563646020', latitude: '-41.294132', longitude: '174.775354', latitude_rounded: '-41.2941', longitude_rounded: '174.7753', user:'trunks'},
//         {id: 7, timestamp: '1563649020', latitude: '-41.294132', longitude: '174.775354', latitude_rounded: '-41.2941', longitude_rounded: '174.7753', user:'trunks'},
//         {id: 8, timestamp: '1563652020', latitude: '-41.294132', longitude: '174.775354', latitude_rounded: '-41.2941', longitude_rounded: '174.7753', user:'trunks'},
//         {id: 9, timestamp: '1563655020', latitude: '-41.294132', longitude: '174.775354', latitude_rounded: '-41.2941', longitude_rounded: '174.7753', user:'trunks'},
//         {id: 10, timestamp: '1563636720', latitude: '-41.291847', longitude: '174.776518', latitude_rounded: '-41.2918', longitude_rounded: '174.3657', user:'goku'},
//         {id: 11, timestamp: '1563674020', latitude: '-41.291847', longitude: '174.776518', latitude_rounded: '-41.2918', longitude_rounded: '174.3657', user:'goku'},
//         {id: 12, timestamp: '1563635020', latitude: '-41.291847', longitude: '174.776518', latitude_rounded: '-41.2918', longitude_rounded: '174.3657', user:'goku'},
//         {id: 13, timestamp: '1563647320', latitude: '-41.291847', longitude: '174.776518', latitude_rounded: '-41.2918', longitude_rounded: '174.3657', user:'goku'},
//         {id: 14, timestamp: '1563649020', latitude: '-41.294132', longitude: '174.775354', latitude_rounded: '-41.2941', longitude_rounded: '174.7753', user:'trunks'},
//         {id: 15, timestamp: '1563648320', latitude: '-41.294132', longitude: '174.775354', latitude_rounded: '-41.2941', longitude_rounded: '174.7753', user:'trunks'},
//         {id: 16, timestamp: '1563652320', latitude: '-41.294132', longitude: '174.775354', latitude_rounded: '-41.2941', longitude_rounded: '174.7753', user:'trunks'},
//         {id: 17, timestamp: '1563650920', latitude: '-41.294132', longitude: '174.775354', latitude_rounded: '-41.2941', longitude_rounded: '174.7753', user:'trunks'},
//         {id: 18, timestamp: '1563653450', latitude: '-41.294132', longitude: '174.775354', latitude_rounded: '-41.2941', longitude_rounded: '174.7753', user:'Ben'},






















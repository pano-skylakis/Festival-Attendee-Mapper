
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('geolocation').del()
    .then(function () {

      let seedData = []
      for(let i = 0; i<50; i++){
        seedData.push({id:i, timestamp: 1563868900, latitude: -41.2974457, longitude: 174.7743361, latitude_rounded: -41.2974, longitude_rounded: 174.7743, user: 'Ben'})
      }
      for(let i = 50; i<100; i++){
        seedData.push({id:i, timestamp: 1563883189, latitude: -41.2970434, longitude: 174.774214, latitude_rounded: -41.2970, longitude_rounded: 174.7742, user: 'Pano'})
      }
      // Inserts seed entries
      return knex('geolocation').insert(seedData);
    });
};
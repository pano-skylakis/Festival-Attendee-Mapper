const connection = require('./connection')


function getGeoLocations(db = connection) {
    return db('geolocation').select()
}


function addGeoLocation(coords, db = connection) {
    return db('geolocation').insert(coords)
}


function getGeoLocationsByTime(timeGreaterThan, timeLessThan, db = connection) {
    return db('geolocation').where('timestamp', '>', timeGreaterThan).andWhere('timestamp', '<', timeLessThan)
}


function getTotalUniqueUsers(db = connection) {
    return db('geolocation')
        .distinct()
        .pluck('user')
        .then(user => {
            return user.length
        })
}

function getHeatMapValues(db = connection) {
    return db('geolocation')
        .distinct('latitude_rounded', 'longitude_rounded')
        .then(latLongPairs => {
            return latLongPairs
        })
}
function getHeatMapIntensity(data, db = connection){
    return db('geolocation')
        .where('latitude_rounded', data.latitude_rounded).andWhere('longitude_rounded', data.longitude_rounded)
        .select('latitude_rounded', 'longitude_rounded')
}

module.exports = {
    getGeoLocations,
    addGeoLocation,
    getGeoLocationsByTime,
    getTotalUniqueUsers,
    getHeatMapValues,
    getHeatMapIntensity,
}


// stuff.map(morestuff => {
//     db('geolocation')
//         .select()
//         .where('latitude_rounded', morestuff.latitude_rounded 
//         && 'longitude_rounded', morestuff.longitude_rounded)
//         .then(arr =>{
//             morestuff.intensity = arr.length
//         })
// })



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
        .then(stuff => {
            return stuff
        })
}

module.exports = {
    getGeoLocations,
    addGeoLocation,
    getGeoLocationsByTime,
    getTotalUniqueUsers,
    getHeatMapValues,
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



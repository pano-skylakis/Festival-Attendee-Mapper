const connection = require('./connection')

function getGeoLocations(db = connection) {
    return db('geolocation').select()
}

function addGeoLocation(coords, db = connection) {
    return db('geolocation').insert(coords)
}

function getTotalUniqueUsers(db = connection){
    return db('geolocation')
    .distinct()
    .pluck('user')
    .then(user=>{
        return user.length
    })
}

module.exports = {
    getGeoLocations,
    addGeoLocation,
    getTotalUniqueUsers,
}
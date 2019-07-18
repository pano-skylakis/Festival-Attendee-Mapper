const connection = require('./connection')

function getGeoLocations(db = connection) {
    return db('geolocation').select()
}

function addGeoLocation(coords, db = connection) {
    return db('geolocation').insert(coords)
}

module.exports = {
    getGeoLocations,
    addGeoLocation
}
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

module.exports = {
    getGeoLocations,
    addGeoLocation,
    getGeoLocationsByTime
}
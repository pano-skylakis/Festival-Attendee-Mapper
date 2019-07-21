const connection = require('./connection')

function getMarkerLocations(db = connection) {
    return db('marker_locations').select()
}

module.exports = {
    getMarkerLocations
}
const connection = require('./connection')

function getMarkerLocations(db = connection) {
    return db('marker_locations').select()
}

function addMarkerLocation(coords, db = connection) {
    return db('marker_locations').insert(coords)
}

function deletePost(id, db = connection) {
    return db('marker_locations').where('id', id).del()
}

module.exports = {
    getMarkerLocations,
    addMarkerLocation,
    deletePost
}
const connection = require('./connection')

function getMarkerLocations(db = connection) {
    return db('marker_locations').select()
}

function addMarkerLocation(coords, db = connection) {
    return db('marker_locations').insert(coords)
}

function updateMarkerDescription(description, id, db = connection) {
    console.log(description, id)
    return db('marker_locations').where('id', id).update(description)
}

function deletePost(id, db = connection) {
    return db('marker_locations').where('id', id).del()
}

module.exports = {
    getMarkerLocations,
    addMarkerLocation,
    updateMarkerDescription,
    deletePost
}
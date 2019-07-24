const connection = require('./connection')

// uncomment to delete all markers from database on deploy
// function deleteAllMarkers(db = connection) {
//     console.log('yep')
//     return db('marker_locations').where('id', '>', 0).del()
//         .then(deleted => {
//             console.log(deleted)
//         })
// }

// deleteAllMarkers()


//marker functions

function getMarkerLocations(db = connection) {
    return db('marker_locations').select()
}

function addMarkerLocation(coords, db = connection) {
    return db('marker_locations').insert(coords)
}

function updateMarkerDescription(description, id, db = connection) {
    return db('marker_locations').where('id', id).update(description)
}

function deleteMarker(id, db = connection) {
    return db('marker_locations').where('id', id).del()
}

module.exports = {
    getMarkerLocations,
    addMarkerLocation,
    updateMarkerDescription,
    deleteMarker
}
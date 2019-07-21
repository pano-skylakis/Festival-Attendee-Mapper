const router = require('express').Router()
const db = require('../db/markerLocations')


router.get('/markers', (req, res) => {
    db.getMarkerLocations()
        .then(coords => {
            res.send(coords)
        })
        .catch(err => {
            res.send(err)
        })
})

module.exports = router
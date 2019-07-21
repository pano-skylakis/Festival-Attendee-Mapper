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

router.post('/markers', (req, res) => {
    db.addMarkerLocation(req.body)
        .then(id => {
            res.send(id)
        })
        .catch(err => {
            res.send(err)
        })
})

module.exports = router
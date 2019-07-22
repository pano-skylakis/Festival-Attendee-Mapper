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


router.put('/markers/:id', (req, res) => {
    db.updateMarkerDescription(req.body, req.params.id)
        .then(numberOfUpdated => {
            res.sendStatus(200)
        })
        .catch(err => {
            console.log(err)
            res.send(err)
        })
})


router.delete('/markers/:id', (req, res) => {
    db.deletePost(req.params.id)
        .then(numberOfDeleted => {
            res.sendStatus(200)
        })
        .catch(err => {
            res.send(err)
        })
})

module.exports = router
const router = require('express').Router()
const db = require('../db/geolocations')


router.get('/', (req, res) => {
    db.getGeoLocations()
        .then(coords => {
            res.send(coords)
        })
        .catch(err => {
            res.send(err)
        })
})


router.post('/', (req, res) => {
    db.addGeoLocation(req.body)
        .then(id => {
            res.json(id)
        })
        .catch(err => {
            res.json(err)
        })
})


router.get('/:timestamp', (req, res) => {
    let dates = req.params.timestamp.split('-')
    let greaterThan = parseInt(dates[0])
    let lessThan = parseInt(dates[1])
    db.getGeoLocationsByTime(greaterThan, lessThan)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.send(err)
        })
})
module.exports = router
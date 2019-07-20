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

//users = int of the total number of unqiue users in DB

router.get('/timestamp/:timestamp', (req, res) => {
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

router.get('/totaluniqueusers', (req, res)=>{
    db.getTotalUniqueUsers()
    .then(users =>{
        res.json(users)
    })
})




module.exports = router
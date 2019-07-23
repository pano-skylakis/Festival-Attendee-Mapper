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
            res.status(500).json(err)
        })
})


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


//users = int of the total number of unqiue users in DB
router.get('/totaluniqueusers', (req, res)=>{
    db.getTotalUniqueUsers()
    .then(users =>{
        res.json(users)
    })
})
router.get('/heatmapvalues', (req, res)=> {
    db.getHeatMapValues()
    .then(values =>{
        res.json(values)
    })
})

router.post('/heatmapvaluesbyid', (req, res)=> {
    db.getHeatmapValuesByHour(req.body)
    .then(values =>{
        res.json(values)
    })
})

router.post('/intensity', (req,res)=>{
     db.getHeatMapIntensity(req.body)
    .then(data =>{
        res.json(data)
    })
})


module.exports = router
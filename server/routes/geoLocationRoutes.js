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

router.get('/heatmapvalues/:heatmapintensity', (req,res)=>{    
    let splitCoords = req.params.heatmapintensity.split('_')

    let coords = {
        latitude_rounded: undefined,
        longitude_rounded: undefined,
    }

    coords.longitude_rounded = splitCoords[1]
    coords.latitude_rounded = splitCoords[0]

    db.getHeatMapIntensity(coords)
    .then(data =>{
        res.send(data)
    })
})


module.exports = router
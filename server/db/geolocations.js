const connection = require('./connection')

function convertTheBigOnes (db = connection) {
    return  db('geolocation').where('timestamp', '>', 15638617030)
        .then(bigs => {
            bigs = bigs.map(convert)
            return db('geolocation').insert(bigs)
        })
}

function logTheSmalls (db = connection) {
    return  db('geolocation').where('timestamp', '<', 15638617030)
        .then(all => console.log(all.length))
}

function deleteTheBigOnes (db = connection) {
    return  db('geolocation').where('timestamp', '>', 15638617030).delete()
}

function convert(obj) {
    obj.timestamp = Math.floor(obj.timestamp / 1000)
    delete obj.id
    return obj
}

function doTheThing (db = connection) {
    return logTheSmalls()
        .then(() => convertTheBigOnes())
        .then(() => logTheSmalls())
        .then(() => deleteTheBigOnes())
        .finally(() => db.destroy())
}

doTheThing()

// ACTUAL CODE

function getGeoLocations(db = connection) {
    return db('geolocation').select()
}


function addGeoLocation(coords, db = connection) {
    return db('geolocation').insert(coords)
}


function getGeoLocationsByTime(timeGreaterThan, timeLessThan, db = connection) {
    let timeArr = []
    timeArr.push(timeGreaterThan - 43200, timeLessThan - 43200)

    console.log(timeArr)
    console.log('db: '+ timeGreaterThan, timeLessThan)

    return  db('geolocation').where('timestamp', '>', timeGreaterThan)
    .then(thing => {
        console.log("min: ", timeGreaterThan)
        console.log("max: ", timeLessThan)

        console.log(thing[0])
        // return db('geolocation').where('timestamp', '>', timeGreaterThan).andWhere('timestamp', '<', timeLessThan)
        return db('geolocation').whereBetween('timestamp', timeArr)
        .then(data =>{
            console.log('DB response: ', data)
            return data
            
        })
    })
}


function getTotalUniqueUsers(db = connection) {
    return db('geolocation')
        .distinct()
        .pluck('user')
        .then(user => {
            return user.length
        })
}


function getHeatMapValues(db = connection) {
    return db('geolocation')
        .distinct('latitude_rounded', 'longitude_rounded')
        .then(latLongPairs => {            
            return latLongPairs
        })
}


function getHeatMapIntensity(data, db = connection){
    return db('geolocation')
        .where('latitude_rounded', data.latitude_rounded).andWhere('longitude_rounded', data.longitude_rounded)
        .select('latitude_rounded', 'longitude_rounded')
        .then(res=>{
            data.intensity = res.length * 500
            let newArr = []
            newArr.push(data.latitude_rounded, data.longitude_rounded, data.intensity)
            return newArr
        })
}

function getHeatmapValuesByHour(ids, db = connection){
    return db('geolocation')
    .whereIn('id', ids)
    .distinct('latitude_rounded', 'longitude_rounded')
    .then(res =>{
        return res
    })
}




module.exports = {
    getGeoLocations,
    addGeoLocation,
    getGeoLocationsByTime,
    getTotalUniqueUsers,
    getHeatMapValues,
    getHeatMapIntensity,
    getHeatmapValuesByHour,
}



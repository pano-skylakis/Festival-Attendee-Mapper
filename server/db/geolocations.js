const connection = require('./connection')


// uncomment this section of code to convert 13-digit timestamps in 'timestamp' column into 10-digit timestamps

// function convertTheBigOnes (db = connection) {
//     return  db('geolocation').where('timestamp', '>', 15638617030)
//         .then(bigs => {
//             bigs = bigs.map(convert)
//             return db('geolocation').insert(bigs)
//         })
// }

// function logTheSmalls (db = connection) {
//     return  db('geolocation').where('timestamp', '<', 15638617030)
//         .then(all => console.log(all.length))
// }

// function deleteTheBigOnes (db = connection) {
//     return  db('geolocation').where('timestamp', '>', 15638617030).delete()
// }

// function convert(obj) {
//     obj.timestamp = Math.floor(obj.timestamp / 1000)
//     delete obj.id
//     return obj
// }

// function doTheThing (db = connection) {
//     return logTheSmalls()
//         .then(() => convertTheBigOnes())
//         .then(() => logTheSmalls())
//         .then(() => deleteTheBigOnes())
//         .catch(() => console.log('oops'))
// }

// doTheThing()



// DB Functions >>>

function getGeoLocations(db = connection) {
    return db('geolocation').select()
}


function addGeoLocation(coords, db = connection) {
    return db('geolocation').insert(coords)
}


function getGeoLocationsByTime(timeGreaterThan, timeLessThan, db = connection) {
    let timeArr = []
    // - 43200
    timeArr.push(timeGreaterThan , timeLessThan)
        return db('geolocation').whereBetween('timestamp', timeArr)
        .then(locationsByTime =>{
            console.log('locations by time: ', locationsByTime)
            return locationsByTime
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


function getCurrentUniqueUsers(db = connection) {
    let currentTime = Math.floor(Date.now()/1000)
    currentTime -= 300
    return db('geolocation')
        .where('timestamp', '>=', currentTime )
        .distinct('user')
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
    getCurrentUniqueUsers
}



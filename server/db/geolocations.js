const connection = require('./connection')


function getGeoLocations(db = connection) {
    return db('geolocation').select()
}


function addGeoLocation(coords, db = connection) {
    return db('geolocation').insert(coords)
}


function getGeoLocationsByTime(timeGreaterThan, timeLessThan, db = connection) {
    return db('geolocation').where('timestamp', '>', timeGreaterThan).andWhere('timestamp', '<', timeLessThan)
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


module.exports = {
    getGeoLocations,
    addGeoLocation,
    getGeoLocationsByTime,
    getTotalUniqueUsers,
    getHeatMapValues,
    getHeatMapIntensity,
}



import request from 'superagent'

const route = '/api/v1/dashboard'


export function getGeoLocationsApi() {
    return request.get(route)
        .then(res => {
            return res.body
        })
}


export function addGeoLocationApi(body) {
    console.log('API: ', body)
    return request.post(route)
        .send({latitude: body.latitude, longitude: body.longitude, user: body.user, timestamp: body.timestamp, latitude_rounded: body.latitude, longitude_rounded: body.longitude})
        .end((err, res) => {
            console.log('response: ', res, 'error: ', err)
            err ? err : res
        })
}


export function getGeoLocationByTimeApi(greaterThan, lessThan) {
    return request.get(`${route}/timestamp/${greaterThan}-${lessThan}`)
            .then(res => {
                return res.body
            })
<<<<<<< HEAD
}


export function getHeatMapValues(){
    return request.get(`${route}/heatmapvalues`)
    .then(res =>{
        return res.body
    })
}


export function getHeatMapIntensity(obj){
    return request.get(`${route}/heatmapvalues/${obj.latitude_rounded}_${obj.longitude_rounded}`)
    .then(res=>{
        return res.body.length
    })
||||||| merged common ancestors
=======
}


export function getTotalUniqueUsersApi() {
    return request.get(`${route}/totaluniqueusers`)
        .then(res => {
            return res.body
        })
>>>>>>> f0a380da00d6d07b05600790e6aaf6277d68ea20
}
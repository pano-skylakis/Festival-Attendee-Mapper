import request from 'superagent'

const route = '/api/v1/dashboard'


export function getGeoLocationsApi() {
    return request.get(route)
        .then(res => {
            return res.body
        })
}


export function addGeoLocationApi(body) {
    return request.post(route)
        .send({latitude: body.latitude, longitude: body.longitude, user: body.user, timestamp: body.timestamp, latitude_rounded: body.latitude, longitude_rounded: body.longitude})
        .then(res => {
            return res.body
        })
        .catch(err => {
            return err
        })
}


export function getGeoLocationByTimeApi(greaterThan, lessThan) {
    return request.get(`${route}/timestamp/${greaterThan}-${lessThan}`)
            .then(res => {
                return res.body
            })
}


export function getHeatMapValues(){
    return request.get(`${route}/heatmapvalues`)
    .then(res =>{
        return res.body
    })
}

export function getHeatmapValuesByHour(ids){
    return request.post(`${route}/heatmapvaluesbyid`)
    .send(ids)
    .then(res=>{
        return JSON.parse(res.text)
    })
}


export function getHeatMapIntensity(obj){
    return request.post(`${route}/intensity`)
    .send(obj)
    .then(res=>{
        return JSON.parse(res.text)
    })
}


export function getTotalUniqueUsersApi() {
    return request.get(`${route}/totaluniqueusers`)
        .then(res => {
            return res.body
        })
}
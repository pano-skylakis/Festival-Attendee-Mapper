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
        .send({latitude: body.latitude, longitude: body.longitude, user: body.user, timestamp: body.timestamp})
        .end((err, res) => {
            err ? err : res
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


export function getHeatMapIntensity(obj){
    return request.get(`${route}/heatmapvalues/${obj.latitude_rounded}_${obj.longitude_rounded}`)
    .then(res=>{
        return res.body.length
    })
}
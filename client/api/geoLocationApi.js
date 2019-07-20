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
        .send({latitude: body.latitude, longitude: body.longitude, user: body.user})
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


export function getTotalUniqueUsersApi() {
    return request.get(`${route}/totaluniqueusers`)
        .then(res => {
            return res.body
        })
}
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
        .send({latitude: body.latitude, longitude: body.longitude})
        .end((err, res) => {
            err ? err : res
        })
}
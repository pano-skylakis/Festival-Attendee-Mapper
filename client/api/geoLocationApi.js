import request from 'superagent'

const route = '/api/v1/dashboard'

export function getGeoLocationsApi() {
    return request.get(route)
        .then(res => {
            return res.body
        })
}


export function addGeoLocationApi(body) {
    console.log(body.user)
    return request.post(route)
        .send({latitude: body.latitude, longitude: body.longitude, latitude_rounded: body.latitude, longitude_rounded: body.longitude, user: body.user})
        .end((err, res) => {
            err ? err : res
        })
}
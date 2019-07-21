import request from 'superagent'

const route = '/api/v1/dashboard/markers'

export function getMarkerLocationsApi() {
    return request.get(route)
        .then(res => {
            return res.body
        })
}

export function addMarkerLocationApi(body) {
    return request.post(route)
        .send({latitude: body.lat, longitude: body.lng})
        .then(res => {
            return res.body
        })
        .catch(err => {
            return err
        })
}

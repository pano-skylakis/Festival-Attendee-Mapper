import request from 'superagent'

const route = '/api/v1/dashboard/markers'

export function getMarkerLocationsApi() {
    return request.get(route)
        .then(res => {
            return res.body
        })
}

export function addMarkerLocationApi(body) {
    console.log('Marker Location API: ', body)
    return request.post(route)
        .send({latitude: body.latitude, longitude: body.longitude})
        .end((err, res) => {
            console.log('response: ', res, 'error: ', err)
            err ? err : res
        })
}

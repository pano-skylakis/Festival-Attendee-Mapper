import request from 'superagent'

const route = '/api/v1/dashboard/markers'

export function getMarkerLocationsApi() {
    return request.get(route)
        .then(res => {
            return res.body
        })
}


export function addMarkerLocationApi(latLng, markerName) {
    return request.post(route)
        .send({ latitude: latLng.lat, longitude: latLng.lng, markers: markerName })
        .then(res => {
            return res.body
        })
        .catch(err => {
            return err
        })
}


export function addMarkerDescriptionApi(body, id) {
    return request.put(`${route}/${id}`)
        .send({ description: body })
        .then(res => {
            return res.body
        })
        .catch(err => {
            return err
        })
}


export function deleteMarkerApi(id) {
    return request.del(`${route}/${id}`)
        .then(res => {
            return res.body
        })
        .catch(err => {
            return err
        })
}
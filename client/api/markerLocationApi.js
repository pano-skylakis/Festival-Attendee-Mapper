import request from 'superagent'

const route = '/api/v1/dashboard/markers'
const descriptionRoute = '/api/v1/dashboard/markers/description'

export function getMarkerLocationsApi() {
    return request.get(route)
        .then(res => {
            return res.body
        })
}

export function addMarkerLocationApi(body) {
    return request.post(route)
        .send({ latitude: body.lat, longitude: body.lng })
        .then(res => {
            return res.body
        })
        .catch(err => {
            return err
        })
}

export function addMarkerDescriptionApi(body) {
    return request.post(descriptionRoute)
        .send({ description: body.description })
        .then(res => {
            return res.body
        })
        .catch(err => {
            return err
        })
}

export function deletePost() {
    return request.del(route)
        .then(res => {
            return res.body
        })
        .catch(err => {
            return err
        })
}
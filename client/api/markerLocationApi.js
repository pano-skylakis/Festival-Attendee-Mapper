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
        .send({ latitude: body.lat, longitude: body.lng })
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
            console.log(err)
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
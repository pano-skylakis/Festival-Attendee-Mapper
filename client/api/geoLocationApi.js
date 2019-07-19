import request from 'superagent'

const route = '/api/v1/dashboard'

export function getGeoLocationsApi() {
    return request.get(route)
        .then(res => {
            return res.body
        })
}


export function addGeoLocationApi(body) {
<<<<<<< HEAD
    return request.post(route)
        .send({latitude: body.latitude, longitude: body.longitude})
=======
    console.log(body.user)
    return request.post(route)
        .send({latitude: body.latitude, longitude: body.longitude, user: body.user})
>>>>>>> 50654a9ba7abb00daa75374eda4cce7b56bc86df
        .end((err, res) => {
            err ? err : res
        })
}
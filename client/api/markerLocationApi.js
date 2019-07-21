import request from 'superagent'

const route = '/api/v1/dashboard/markers'

export function getMarkerLocationsApi() {
    return request.get(route)
        .then(res => {
            return res.body
        })
}

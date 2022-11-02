const request = require('request')
//REF: https://github.com/googlemaps/google-maps-services-js

const geocode = (address, callback) => {
    const url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=" + process.env.GOOGLE_MAPS_API_KEY
    request({ url, json: true}, (error, {body}) => {
        if (error) {
            callback("Unable to connect to location services!", undefined)
        } else if (body.results.length === 0) {
            callback("Unable to find location. Try another search.", undefined)
        } else {
            callback(undefined, {
                longitude: body.results[0].geometry.location.lat,
                latitude: body.results[0].geometry.location.lng,
                location: body.results[0].formatted_address
            })
        }
    })
}



module.exports = geocode
require('dotenv').config()
//const port = process.env.PORT || 3000
const geocode = require('./utils/geocode.js')
geocode("UCLA", (error, {latitude, longitude, location} = {}) => {
    if (error) {
      return console.log(error)
    }
    return console.log({latitude, longitude, location})  
})

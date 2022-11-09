require('dotenv').config()
const geocode = require('./utils/geocode.js')
const express = require("express")
require("./db/mongodb")  // ensures mongoose connects to the db
const User = require("./models/user")

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', (req, res) => {
  const user = new User(req.body)

  user.save().then(() => {
    res.send(user)
  }).catch(() => {
    
  })
})

app.listen(port, () => {
  console.log("Server is up on port " + port)
})
/*
geocode("UCLA", (error, {latitude, longitude, location} = {}) => {
    if (error) {
      return console.log(error)
    }
    return console.log({latitude, longitude, location})  
})
*/
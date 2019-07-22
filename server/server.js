const path = require('path')
// const cors = require('cors')
const express = require('express')
const geoLocationRoutes = require('./routes/geoLocationRoutes')
const markerLocationRoutes = require('./routes/markerLocationRoutes')

const server = express()

// server.use(cors({origin: 'http://localhost:8080'}))
server.use(express.urlencoded({extended: true}))
server.use(express.json())

server.use(express.static('public'))
server.use('/api/v1/dashboard', geoLocationRoutes, markerLocationRoutes )


module.exports = server
var shrinkRay = require('shrink-ray')
var express = require('express')

var app = express()

// compress all requests
app.use(shrinkRay())

// add all routes

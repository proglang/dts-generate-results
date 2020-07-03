const express = require('express')
const bodyParser = require('body-parser')

// ... app code here

const expressApp = express().use(bodyParser.json())

expressApp.post('/fulfillment', app)

expressApp.listen(3000)

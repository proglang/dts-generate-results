const express = require('express')
const skyway = require('skyway')
const bodyParser = require('body-parser')
const routes = require('./routes')

const app = express()
const api = skyway(`${__dirname}/swagger.yaml`)

app.get('/swagger.json', api.docs())
app.use('/docs', api.ui('/swagger.json'))
app.use(api.routes({
  parsers: {
    'application/json': bodyParser.json()
  }
}))
app.use(routes)

app.listen(8000)

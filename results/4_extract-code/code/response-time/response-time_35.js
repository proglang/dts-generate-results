var express = require('express')
var responseTime = require('response-time')
var StatsD = require('node-statsd')

var app = express()
var stats = new StatsD()

stats.socket.on('error', function (error) {
  console.error(error.stack)
})

app.use(responseTime(function (req, res, time) {
  var stat = (req.method + req.url).toLowerCase()
    .replace(/[:.]/g, '')
    .replace(/\//g, '_')
  stats.timing(stat, time)
}))

app.get('/', function (req, res) {
  res.send('hello, world!')
})

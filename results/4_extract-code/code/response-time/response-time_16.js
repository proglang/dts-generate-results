var finalhandler = require('finalhandler')
var http = require('http')
var responseTime = require('response-time')

// create "middleware"
var _responseTime = responseTime()

http.createServer(function (req, res) {
  var done = finalhandler(req, res)
  _responseTime(req, res, function (err) {
    if (err) return done(err)

    // respond to request
    res.setHeader('content-type', 'text/plain')
    res.end('hello, world!')
  })
})

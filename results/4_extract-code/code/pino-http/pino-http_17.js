'use strict'

var http = require('http')
var server = http.createServer(handle)
var pino = require('pino')
var logger = require('pino-http')({
  // Reuse an existing logger instance
  logger: pino(),

  // Define a custom request id function
  genReqId: function (req) { return req.id },

  // Define custom serializers
  serializers: {
    err: pino.stdSerializers.err,
    req: pino.stdSerializers.req,
    res: pino.stdSerializers.res
  },

  // Logger level is `info` by default
  useLevel: 'info',


  // Define a custom logger level
  customLogLevel: function (res, err) {
    if (res.statusCode >= 400 && res.statusCode < 500) {
      return 'warn'
    } else if (res.statusCode >= 500 || err) {
      return 'error'
    }
    return 'info'
  }
})

function handle (req, res) {
  logger(req, res)
  req.log.info('something else')
  res.end('hello world')
}

server.listen(3000)

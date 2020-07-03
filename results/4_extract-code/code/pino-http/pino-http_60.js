var http = require('http')
var logger = require('pino-http')()
var someImportantThingThatHasToBeFirst = require('some-important-thing')
http.createServer((req, res) => {
  res[logger.startTime] = Date.now()
  someImportantThingThatHasToBeFirst(req, res)
  logger(req, res)
  res.end('hello world')
}).listen(3000)

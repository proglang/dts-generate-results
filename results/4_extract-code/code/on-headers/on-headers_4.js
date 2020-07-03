var http = require('http')
var onHeaders = require('on-headers')

http
  .createServer(onRequest)
  .listen(3000)

function addPoweredBy () {
  // set if not set by end of request
  if (!this.getHeader('X-Powered-By')) {
    this.setHeader('X-Powered-By', 'Node.js')
  }
}

function onRequest (req, res) {
  onHeaders(res, addPoweredBy)

  res.setHeader('Content-Type', 'text/plain')
  res.end('hello!')
}

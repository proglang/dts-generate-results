var fresh = require('fresh')
var http = require('http')

var server = http.createServer(function (req, res) {
  // perform server logic
  // ... including adding ETag / Last-Modified response headers

  if (isFresh(req, res)) {
    // client has a fresh copy of resource
    res.statusCode = 304
    res.end()
    return
  }

  // send the resource
  res.statusCode = 200
  res.end('hello, world!')
})

function isFresh (req, res) {
  return fresh(req.headers, {
    'etag': res.getHeader('ETag'),
    'last-modified': res.getHeader('Last-Modified')
  })
}

server.listen(3000)

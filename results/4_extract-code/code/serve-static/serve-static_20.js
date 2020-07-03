var contentDisposition = require('content-disposition')
var finalhandler = require('finalhandler')
var http = require('http')
var serveStatic = require('serve-static')

// Serve up public/ftp folder
var serve = serveStatic('public/ftp', {
  'index': false,
  'setHeaders': setHeaders
})

// Set header to force download
function setHeaders (res, path) {
  res.setHeader('Content-Disposition', contentDisposition(path))
}

// Create server
var server = http.createServer(function onRequest (req, res) {
  serve(req, res, finalhandler(req, res))
})

// Listen
server.listen(3000)

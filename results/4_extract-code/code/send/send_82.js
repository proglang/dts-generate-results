var http = require('http')
var parseUrl = require('parseurl')
var send = require('send')

var server = http.createServer(function onRequest (req, res) {
  // your custom error-handling logic:
  function error (err) {
    res.statusCode = err.status || 500
    res.end(err.message)
  }

  // your custom headers
  function headers (res, path, stat) {
    // serve all files for download
    res.setHeader('Content-Disposition', 'attachment')
  }

  // your custom directory handling logic:
  function redirect () {
    res.statusCode = 301
    res.setHeader('Location', req.url + '/')
    res.end('Redirecting to ' + req.url + '/')
  }

  // transfer arbitrary files from within
  // /www/example.com/public/*
  send(req, parseUrl(req).pathname, { root: '/www/public' })
    .on('error', error)
    .on('directory', redirect)
    .on('headers', headers)
    .pipe(res)
})

server.listen(3000)

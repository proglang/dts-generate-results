var http = require('http')
var fs = require('fs')
var parseUrl = require('parseurl')
var send = require('send')

// Transfer arbitrary files from within /www/example.com/public/*
// with a custom handler for directory listing
var server = http.createServer(function onRequest (req, res) {
  send(req, parseUrl(req).pathname, { index: false, root: '/www/public' })
    .once('directory', directory)
    .pipe(res)
})

server.listen(3000)

// Custom directory handler
function directory (res, path) {
  var stream = this

  // redirect to trailing slash for consistent url
  if (!stream.hasTrailingSlash()) {
    return stream.redirect(path)
  }

  // get directory list
  fs.readdir(path, function onReaddir (err, list) {
    if (err) return stream.error(err)

    // render an index for the directory
    res.setHeader('Content-Type', 'text/plain; charset=UTF-8')
    res.end(list.join('\n') + '\n')
  })
}

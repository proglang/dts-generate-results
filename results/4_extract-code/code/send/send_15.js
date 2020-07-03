var http = require('http')
var parseUrl = require('parseurl')
var send = require('send')

var server = http.createServer(function onRequest (req, res) {
  send(req, parseUrl(req).pathname, { root: '/www/public' })
    .pipe(res)
})

server.listen(3000)

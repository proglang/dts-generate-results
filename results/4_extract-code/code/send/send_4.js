var http = require('http')
var send = require('send')

var server = http.createServer(function onRequest (req, res) {
  send(req, '/path/to/index.html')
    .pipe(res)
})

server.listen(3000)

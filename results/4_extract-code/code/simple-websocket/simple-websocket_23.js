var Server = require('simple-websocket/server')

var server = new Server({ port: port }) // see `ws` docs for other options

server.on('connection', function (socket) {
  socket.write('pong')
  socket.on('data', function (data) {})
  socket.on('close', function () {})
  socket.on('error', function (err) {})
})

server.close()

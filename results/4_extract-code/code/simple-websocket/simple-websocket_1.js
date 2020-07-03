var Socket = require('simple-websocket')

var socket = new Socket('wss://echo.websocket.org')
socket.on('connect', function () {
  // socket is connected!
  socket.send('sup!')
})

socket.on('data', function (data) {
  console.log('got message: ' + data)
})

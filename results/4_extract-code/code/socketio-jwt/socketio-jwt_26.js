var io            = require("socket.io")(server);
var socketioJwt   = require("socketio-jwt");

//// With socket.io < 1.0 ////
io.set('authorization', socketioJwt.authorize({
  secret: 'your secret or public key',
  handshake: true
}));

//// With socket.io >= 1.0 ////
io.use(socketioJwt.authorize({
  secret: 'your secret or public key',
  handshake: true
}));

io.on('connection', function (socket) {
  // in socket.io < 1.0
  console.log('hello!', socket.handshake.decoded_token.name);

  // in socket.io 1.0
  console.log('hello! ', socket.decoded_token.name);
})

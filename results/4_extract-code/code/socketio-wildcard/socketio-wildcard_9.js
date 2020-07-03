var io         = require('socket.io')();
var middleware = require('socketio-wildcard')();

io.use(middleware);

io.on('connection', function(socket) {
  socket.on('*', function(packet){
    // client.emit('foo', 'bar', 'baz')
    packet.data === ['foo', 'bar', 'baz']
  });
});

io.listen(8000);

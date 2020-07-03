var engine = require('engine.io');
var server = engine.listen(80);

server.on('connection', function(socket){
  socket.send('utf 8 string');
  socket.send(Buffer.from([0, 1, 2, 3, 4, 5])); // binary data
});

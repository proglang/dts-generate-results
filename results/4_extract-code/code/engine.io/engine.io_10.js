var engine = require('engine.io');
var http = require('http').createServer().listen(3000);
var server = engine.attach(http);

server.on('connection', function (socket) {
  socket.on('message', function(data){ });
  socket.on('close', function(){ });
});

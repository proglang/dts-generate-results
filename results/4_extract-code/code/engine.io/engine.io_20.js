var engine = require('engine.io');
var server = new engine.Server();

server.on('connection', function(socket){
  socket.send('hi');
});

// …
httpServer.on('upgrade', function(req, socket, head){
  server.handleUpgrade(req, socket, head);
});
httpServer.on('request', function(req, res){
  server.handleRequest(req, res);
});

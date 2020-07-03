var http = require('http');
var socketClusterServer = require('socketcluster-server');

var httpServer = http.createServer();
var scServer = socketClusterServer.attach(httpServer);

scServer.on('connection', function (socket) {
  // ... Handle new socket connections here
});

httpServer.listen(8000);

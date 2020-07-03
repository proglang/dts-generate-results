var http = require('http');
var socketClusterServer = require('socketcluster-server');
var serveStatic = require('serve-static');
var path = require('path');
var app = require('express')();

app.use(serveStatic(path.resolve(__dirname, 'public')));

var httpServer = http.createServer();

// Attach express to our httpServer
httpServer.on('request', app);

// Attach socketcluster-server to our httpServer
var scServer = socketClusterServer.attach(httpServer);

scServer.on('connection', function (socket) {
  // ... Handle new socket connections here
});

httpServer.listen(8000);

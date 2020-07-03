var httpServer; // previously created with `http.createServer();` from node.js api.

// create a server first, and then attach
var eioServer = require('engine.io').Server();
eioServer.attach(httpServer);

// or call the module as a function to get `Server`
var eioServer = require('engine.io')();
eioServer.attach(httpServer);

// immediately attach
var eioServer = require('engine.io')(httpServer);

// with custom options
var eioServer = require('engine.io')(httpServer, {
  maxHttpBufferSize: 1e3
});

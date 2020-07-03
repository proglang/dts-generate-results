var engine = require('engine.io');
var httpServer = require('http').createServer().listen(3000);
var server = engine.attach(httpServer, {
  wsEngine: 'uws' // requires having uws as dependency
});

server.on('connection', /* ... */);

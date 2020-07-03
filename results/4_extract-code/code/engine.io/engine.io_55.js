var engine = require('engine.io');
var server = engine.listen(3000, {
  pingTimeout: 2000,
  pingInterval: 10000
});

server.on('connection', /* ... */);

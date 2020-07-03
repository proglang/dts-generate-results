const adapter = require('socket.io-redis')('localhost:6379');
adapter.pubClient.on('error', function(){});
adapter.subClient.on('error', function(){});

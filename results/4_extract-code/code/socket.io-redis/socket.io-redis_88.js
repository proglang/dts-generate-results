const io = require('socket.io')(3000);
const redisAdapter = require('socket.io-redis');
const Redis = require('ioredis');

const startupNodes = [
  {
    port: 6380,
    host: '127.0.0.1'
  },
  {
    port: 6381,
    host: '127.0.0.1'
  }
];

io.adapter(redisAdapter({
  pubClient: new Redis.Cluster(startupNodes),
  subClient: new Redis.Cluster(startupNodes)
}));

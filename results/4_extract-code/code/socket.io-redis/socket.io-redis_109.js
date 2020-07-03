const io = require('socket.io')(3000);
const redisAdapter = require('socket.io-redis');
const Redis = require('ioredis');

const options = {
  sentinels: [
    { host: 'somehost1', port: 26379 },
    { host: 'somehost2', port: 26379 }
  ],
  name: 'master01'
};

io.adapter(redisAdapter({
  pubClient: new Redis(options),
  subClient: new Redis(options)
}));

const redis = require('redis');
const redisAdapter = require('socket.io-redis');
const pub = redis.createClient(port, host, { auth_pass: "pwd" });
const sub = redis.createClient(port, host, { auth_pass: "pwd" });
io.adapter(redisAdapter({ pubClient: pub, subClient: sub }));

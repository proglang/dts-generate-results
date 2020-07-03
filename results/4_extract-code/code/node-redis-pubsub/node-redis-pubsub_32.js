var NRP = require('node-redis-pubsub');

var redisPub = redis.createClient();
var redisSub = redis.createClient();

var config = {
  emitter: redisPub,                      // Pass in an existing redis connection that should be used for pub
  receiver: redisSub,                     // Pass in an existing redis connection that should be used for sub
}

var nrp = new NRP(config); // This is the NRP client

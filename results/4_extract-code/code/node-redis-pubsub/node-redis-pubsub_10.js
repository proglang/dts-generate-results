var NRP = require('node-redis-pubsub');

var config = {
  port: 1234                        , // Port of your remote Redis server
  host: 'path.to.remote.redis.host' , // Redis server host, defaults to 127.0.0.1
  auth: 'password'                  , // Password
  scope: 'demo'                       // Use a scope to prevent two NRPs from sharing messages
};

var nrp = new NRP(config); // This is the NRP client

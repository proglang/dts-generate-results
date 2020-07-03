var NRP = require('node-redis-pubsub');
var url = process.env.REDIS_URL;

var config = {
    url: url
};

var nrp = new NRP(config); // This is the NRP client

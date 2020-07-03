var redis = require('redis');
var client = redis.createClient(6379, 'localhost', {enable_offline_queue: false});

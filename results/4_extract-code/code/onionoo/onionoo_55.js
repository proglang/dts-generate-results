const Onionoo = require('onionoo');
const KeyvRedis = require('@keyv/redis');

const redis = new KeyvRedis('redis://user:pass@localhost:6379');
const onionoo = new Onionoo({ cache: redis });

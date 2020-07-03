const Catbox = require('@hapi/catbox');
const CatboxRedis = require('@hapi/catbox-redis');


const cache = new Catbox.Client(CatboxRedis, {
    partition : 'my_cached_data'
    host: 'redis-cluster.domain.com',
    port: 6379,
    database: 0,
    tls: {},
});

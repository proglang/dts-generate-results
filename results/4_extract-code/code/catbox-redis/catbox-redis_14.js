const Hapi = require('hapi')
const CatboxRedis = require('@hapi/catbox-redis');

const server = new Hapi.Server({
    cache : [
        {
            name: 'my_cache',
            provider: {
                constructor: CatboxRedis,
                options: {
                    partition : 'my_cached_data'
                    host: 'redis-cluster.domain.com',
                    port: 6379,
                    database: 0,
                    tls: {},
                }
            }
        }
    ]
});

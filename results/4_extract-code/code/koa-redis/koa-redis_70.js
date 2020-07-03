const session = require('koa-generic-session');
const redisStore = require('koa-redis');
const koa = require('koa');

const app = koa();
app.keys = ['keys', 'keykeys'];
app.use(session({
  store: redisStore({
    // Options specified here
    // <https://github.com/luin/ioredis#cluster>
    isRedisCluster: true,
    nodes: [
      {
        port: 6380,
        host: '127.0.0.1'
      },
      {
        port: 6381,
        host: '127.0.0.1'
      }
      // ...
    ],
    // <https://github.com/luin/ioredis/blob/master/API.md#new-clusterstartupnodes-options>
    clusterOptions: {
      // ...
      redisOptions: {
        // ...
      }
    }
  })
}));

// ...

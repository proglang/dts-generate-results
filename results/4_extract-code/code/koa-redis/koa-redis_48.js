const session = require('koa-generic-session');
const redisStore = require('koa-redis');
const koa = require('koa');

const app = koa();
app.keys = ['keys', 'keykeys'];
app.use(session({
  store: redisStore({
    // Options specified here
    // <https://github.com/luin/ioredis#sentinel>
    sentinels: [
      { host: 'localhost', port: 26379 },
      { host: 'localhost', port: 26380 }
      // ...
    ],
    name: 'mymaster'
  })
}));

// ...

const session = require('koa-generic-session');
const redisStore = require('koa-redis')({
  // Options specified here
});
const app = require('koa')();

app.keys = ['keys', 'keykeys'];
app.use(session({
  store: redisStore
}));

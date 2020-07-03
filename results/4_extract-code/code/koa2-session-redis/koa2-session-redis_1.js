const session = require('koa-session');
const RedisStore = require('koa2-session-redis');
const Koa = require('koa');
const app = new Koa();
//...
const CONFIG = {
  /* other options */
  store: new RedisStore()
};
app.use(session(CONFIG, app));
//...

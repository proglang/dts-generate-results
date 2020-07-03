const Koa = require('koa');
const logger = require('./logger'); // Winston instance.
const koaLogger = require('koa-logger-winston');

const app = new Koa();

app.use(koaLogger(logger));

app.use(async (ctx, next) => {
  await next();
  ctx.body = 'Hello World';
});

app.listen(3000);

const koa = require('koa');
const koaBunyanLogger = require('koa-bunyan-logger');

const app = koa();
app.use(koaBunyanLogger());

app.use(function (ctx, next) {
  ctx.log.info('Got a request from %s for %s', ctx.request.ip, ctx.path);
  return next();
});

app.listen(8000);

const koaBunyanLogger = require('koa-bunyan-logger');

app.use(koaBunyanLogger());
app.use(koaBunyanLogger.requestIdContext());

app.use(function (ctx) {
  ctx.response.set('X-Server-Request-Id', ctx.reqId);
  ctx.body = "Hello world";
});

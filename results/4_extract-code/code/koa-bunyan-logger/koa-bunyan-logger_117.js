const koaBunyanLogger = require('koa-bunyan-logger');

app.use(koaBunyanLogger());
app.use(koaBunyanLogger.requestIdContext());
app.use(koaBunyanLogger.timeContext());

app.use(async function (ctx) {
  ctx.time('get data');
  let user = await getUser();
  let friends = await getFriend(user);
  ctx.timeEnd('get data');

  ctx.time('serialize');
  ctx.body = serialize(user, friends);
  ctx.timeEnd('serialize');
});

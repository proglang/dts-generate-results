const koaBunyanLogger = require('koa-bunyan-logger');

app.use(koaBunyanLogger());
app.use(koaBunyanLogger.requestIdContext());
app.use(koaBunyanLogger.timeContext());

app.use(function (ctx) {
  ctx.time('get data');

  return getUser()
  .then(u => {
    return getFriend(u)
    .then(f => [u, f]);
  })
  .then(data => {
    let user = data[0];
    let friends = data[1];

    ctx.timeEnd('get data');
    ctx.time('serialize');
    ctx.body = serialize(user, friends);
    ctx.timeEnd('serialize');
  });
});

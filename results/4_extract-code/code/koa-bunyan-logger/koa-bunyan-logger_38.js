const koaBunyanLogger = require('koa-bunyan-logger');

app.use(koaBunyanLogger({
  name: 'myapp',
  level: 'debug'
}));

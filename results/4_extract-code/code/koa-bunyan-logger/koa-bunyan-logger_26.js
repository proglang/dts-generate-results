const bunyan = require('bunyan');
const koaBunyanLogger = require('koa-bunyan-logger');

const appLogger = bunyan.createLogger({
  name: 'myapp',
  level: 'debug',
  serializers: bunyan.stdSerializers
});

app.use(koaBunyanLogger(appLogger));

const koaBunyanLogger = require('koa-bunyan-logger');

app.use(koaBunyanLogger());
app.use(koaBunyanLogger.requestIdContext());

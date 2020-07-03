const koaBunyanLogger = require('koa-bunyan-logger');

app.use(koaBunyanLogger());
app.use(koaBunyanLogger.requestIdContext());
app.use(koaBunyanLogger.timeContext({
  updateLogFields: function (fields) {
    return {
      request_trace: {
        name: fields.label,
        time: fields.duration
      }
    };
  }
}));

var express = require('express');
var errorHandler = require('strong-error-handler');

var app = express();
// setup your routes
// `options` are set to default values. For more info, see `options` below.
// app.use(errorHandler({ /* options, see below */ }));
app.use(errorHandler({
  debug: app.get('env') === 'development',
  log: true,
}));

app.listen(3000);

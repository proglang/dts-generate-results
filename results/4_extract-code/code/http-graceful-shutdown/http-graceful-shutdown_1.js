var gracefulShutdown = require('http-graceful-shutdown');
...
// app: can be http, https, express, koa
server = app.listen(...);
...

// this enables the graceful shutdown
gracefulShutdown(server);

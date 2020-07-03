const {
  default: sslify, // middleware factory
  xForwardedProtoResolver: resolver // resolver needed
} = require('koa-sslify');
const Koa = require('koa');

app = new Koa();

// init middleware with resolver
app.use(sslify({ resolver }));

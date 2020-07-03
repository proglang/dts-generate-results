var Koa = require('koa');
var Router = require('koa-router');
var Boom = require('boom');

var app = new Koa();
var router = new Router();

app.use(router.routes());
app.use(router.allowedMethods({
  throw: true,
  notImplemented: () => new Boom.notImplemented(),
  methodNotAllowed: () => new Boom.methodNotAllowed()
}));

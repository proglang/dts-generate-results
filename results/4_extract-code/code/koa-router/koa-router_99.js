var Koa = require('koa');
var Router = require('koa-router');

var app = new Koa();
var router = new Router();

app.use(router.routes());
app.use(router.allowedMethods());

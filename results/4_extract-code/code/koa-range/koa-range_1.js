var fs = require('fs');
var range = require('koa-range');
var route = require('koa-route');
var Koa = require('koa');
var app = new Koa();

app.use(range);

// via buffer
app.use(route.get('/', async function (ctx) {
  ctx.body = new Buffer(100);
}));

// via object
app.use(route.get('/json', async function (ctx) {
  ctx.body = {
    'foo': 'bar'
  };
}));

// via readable stream
app.use(route.get('/stream', async function (ctx) {
  ctx.body = fs.createReadStream('your path');
}));


const Koa = require('koa');
const requestId = require('koa-requestid');
const app = new Koa();

app.use(requestId({
  expose: 'X-Request-Id',
  header: 'X-Req-Id',
  query: 'request-id'
}));

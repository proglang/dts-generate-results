var lag = require('event-loop-lag')(1000);
var koa = require('koa');
var app = koa();

app.use(function*(next){
  if ('/lag' == this.url)
    this.body = lag() + ' milliseconds';
  else
    yield next;
})

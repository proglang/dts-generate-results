var koa = require('koa');
var morgan = require('koa-morgan');
var app = koa();

app.use(morgan.middleware(format, options));


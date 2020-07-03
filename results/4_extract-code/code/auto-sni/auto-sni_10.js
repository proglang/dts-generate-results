var createServer = require("auto-sni");
var koa          = require("koa");
var app          = koa();

app.use(...);

createServer({ email: ..., domains: ..., agreeTos: true }, app.callback());

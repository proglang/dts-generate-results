var Koa = require('koa');
var cors = require('koa2-cors');

var app = new Koa();
app.use(cors());

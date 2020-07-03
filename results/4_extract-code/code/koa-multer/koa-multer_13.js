var koa = require('koa');
var multer = require('koa-multer');

var app = koa();

app.use(multer({ dest: './uploads/'}));

app.listen(3000);

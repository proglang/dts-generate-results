var connect = require('connect');

var app = connect()
  .use(history())
  .listen(3000);

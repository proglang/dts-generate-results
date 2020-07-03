var connect = require('connect');
var query = require('qs-middleware');
var app = connect();
app.use(query());

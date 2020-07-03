var express = require('express');
var proxy = require('http-proxy-middleware');

var app = express();

app.use(
  '/api',
  proxy({ target: 'http://www.example.org', changeOrigin: true })
);
app.listen(3000);

// http://localhost:3000/api/foo/bar -> http://www.example.org/api/foo/bar

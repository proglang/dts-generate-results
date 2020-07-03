var http = require('http');
var mobile = require('is-mobile');

var server = http.createServer(function (req, res) {
  res.end(mobile(req));
});

server.listen(8000);

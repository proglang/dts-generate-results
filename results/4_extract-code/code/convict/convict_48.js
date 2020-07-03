var http = require('http');
var config = require('./config.js');

var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
});

// Consume
server.listen(config.get('port'), config.get('ip'), function(x) {
  var addy = server.address();
  console.log('running on http://' + addy.address + ":" + addy.port);
});

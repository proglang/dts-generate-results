var net = require('net');
var tls = require('tls');
var url = require('url');
var http = require('http');
var agent = require('agent-base');

var endpoint = 'http://nodejs.org/api/';
var parsed = url.parse(endpoint);

// This is the important part!
parsed.agent = agent(function (req, opts) {
  var socket;
  // `secureEndpoint` is true when using the https module
  if (opts.secureEndpoint) {
    socket = tls.connect(opts);
  } else {
    socket = net.connect(opts);
  }
  return socket;
});

// Everything else works just like normal...
http.get(parsed, function (res) {
  console.log('"response" event!', res.headers);
  res.pipe(process.stdout);
});

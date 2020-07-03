var Client = require('ssh2').Client;

var conn = new Client();
conn.on('ready', function() {
  console.log('Client :: ready');
  conn.forwardIn('127.0.0.1', 8000, function(err) {
    if (err) throw err;
    console.log('Listening for connections on server on port 8000!');
  });
}).on('tcp connection', function(info, accept, reject) {
  console.log('TCP :: INCOMING CONNECTION:');
  console.dir(info);
  accept().on('close', function() {
    console.log('TCP :: CLOSED');
  }).on('data', function(data) {
    console.log('TCP :: DATA: ' + data);
  }).end([
    'HTTP/1.1 404 Not Found',
    'Date: Thu, 15 Nov 2012 02:07:58 GMT',
    'Server: ForwardedConnection',
    'Content-Length: 0',
    'Connection: close',
    '',
    ''
  ].join('\r\n'));
}).connect({
  host: '192.168.100.100',
  port: 22,
  username: 'frylock',
  password: 'nodejsrules'
});

// example output:
// Client :: ready
// Listening for connections on server on port 8000!
//  (.... then from another terminal on the server: `curl -I http://127.0.0.1:8000`)
// TCP :: INCOMING CONNECTION: { destIP: '127.0.0.1',
//  destPort: 8000,
//  srcIP: '127.0.0.1',
//  srcPort: 41969 }
// TCP DATA: HEAD / HTTP/1.1
// User-Agent: curl/7.27.0
// Host: 127.0.0.1:8000
// Accept: */*
//
//
// TCP :: CLOSED

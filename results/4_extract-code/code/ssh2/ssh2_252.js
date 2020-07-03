var net = require('net');

var Client = require('ssh2').Client;

var conn = new Client();

conn.on('x11', function(info, accept, reject) {
  var xserversock = new net.Socket();
  xserversock.on('connect', function() {
    var xclientsock = accept();
    xclientsock.pipe(xserversock).pipe(xclientsock);
  });
  // connects to localhost:0.0
  xserversock.connect(6000, 'localhost');
});

conn.on('ready', function() {
  conn.exec('xeyes', { x11: true }, function(err, stream) {
    if (err) throw err;
    var code = 0;
    stream.on('end', function() {
      if (code !== 0)
        console.log('Do you have X11 forwarding enabled on your SSH server?');
      conn.end();
    }).on('exit', function(exitcode) {
      code = exitcode;
    });
  });
}).connect({
  host: '192.168.1.1',
  username: 'foo',
  password: 'bar'
});

var socks = require('socksv5');
var Client = require('ssh2').Client;

var ssh_config = {
  host: '192.168.100.1',
  port: 22,
  username: 'nodejs',
  password: 'rules'
};

socks.createServer(function(info, accept, deny) {
  // NOTE: you could just use one ssh2 client connection for all forwards, but
  // you could run into server-imposed limits if you have too many forwards open
  // at any given time
  var conn = new Client();
  conn.on('ready', function() {
    conn.forwardOut(info.srcAddr,
                    info.srcPort,
                    info.dstAddr,
                    info.dstPort,
                    function(err, stream) {
      if (err) {
        conn.end();
        return deny();
      }

      var clientSocket;
      if (clientSocket = accept(true)) {
        stream.pipe(clientSocket).pipe(stream).on('close', function() {
          conn.end();
        });
      } else
        conn.end();
    });
  }).on('error', function(err) {
    deny();
  }).connect(ssh_config);
}).listen(1080, 'localhost', function() {
  console.log('SOCKSv5 proxy server started on port 1080');
}).useAuth(socks.auth.None());

// test with cURL:
//   curl -i --socks5 localhost:1080 google.com

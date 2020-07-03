var Client = require('ssh2').Client;

var conn1 = new Client();
var conn2 = new Client();

conn1.on('ready', function() {
  console.log('FIRST :: connection ready');
  conn1.exec('nc 192.168.1.2 22', function(err, stream) {
    if (err) {
      console.log('FIRST :: exec error: ' + err);
      return conn1.end();
    }
    conn2.connect({
      sock: stream,
      username: 'user2',
      password: 'password2',
    });
  });
}).connect({
  host: '192.168.1.1',
  username: 'user1',
  password: 'password1',
});

conn2.on('ready', function() {
  console.log('SECOND :: connection ready');
  conn2.exec('uptime', function(err, stream) {
    if (err) {
      console.log('SECOND :: exec error: ' + err);
      return conn1.end();
    }
    stream.on('end', function() {
      conn1.end(); // close parent (and this) connection
    }).on('data', function(data) {
      console.log(data.toString());
    });
  });
});

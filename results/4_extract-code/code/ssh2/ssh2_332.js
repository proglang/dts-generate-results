var Client = require('ssh2').Client;
var xmlhello = '<?xml version="1.0" encoding="UTF-8"?>' +
               '<hello xmlns="urn:ietf:params:xml:ns:netconf:base:1.0">' +
               '    <capabilities>' +
               '		<capability>urn:ietf:params:netconf:base:1.0</capability>' +
               '	</capabilities>' +
               '</hello>]]>]]>';

var conn = new Client();

conn.on('ready', function() {
  console.log('Client :: ready');
  conn.subsys('netconf', function(err, stream) {
    if (err) throw err;
    stream.on('data', function(data) {
      console.log(data);
    }).write(xmlhello);
  });
}).connect({
  host: '1.2.3.4',
  port: 22,
  username: 'blargh',
  password: 'honk'
});

var opts = {
  key: fs.readFileSync('test/fixtures/client.key'),
  cert: fs.readFileSync('test/fixtures/client.crt'),
  ca: fs.readFileSync('test/fixtures/ca.crt')
};

var socket = require('engine.io-client')('ws://localhost', opts);
socket.on('open', function(){
  socket.on('message', function(data){});
  socket.on('close', function(){});
});

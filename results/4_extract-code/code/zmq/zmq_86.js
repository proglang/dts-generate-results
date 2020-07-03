var zmq = require('zmq');
socket = zmq.socket('sub');
socket.bindSync('tcp://127.0.0.1:1234');
socket.subscribe('');
socket.on('message', function(msg) { console.log(msg.toString(); });
// Here blocks indefinitely unless interrupted.
// Let it terminate after 1 second.
setTimeout(function() { socket.unref(); }, 1000);

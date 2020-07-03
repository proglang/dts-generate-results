var io = require('socket.io-client');
var socket = io('http://localhost');
// piggyback using the event-emitter bundled with socket.io client
var patch = require('socketio-wildcard')(io.Manager);
patch(socket);

socket.on('*', function(){ /* … */ })

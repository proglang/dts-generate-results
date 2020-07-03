var messenger = require('messenger');

// here we have 4 servers listening on 4 different ports
var server1 = messenger.createListener(8001);
var server2 = messenger.createListener(8002);
var server3 = messenger.createListener(8003);
var server4 = messenger.createListener('127.0.0.1:8004');

server1.on('a message came', function(m, data){
  console.log(data);
});

server2.on('a message came', function(){
  console.log(data);
});

server3.on('a message came', function(){
  console.log(data);
});

server4.on('a message came', function(){
  console.log(data);
});

// a client that can be used to emit to all the servers
var client = messenger.createSpeaker(8001, 8002, 8003, 8004);

setTimeout(function(){
  // use send instead of reply
  client.send('a message came', {some: 'data'});
}, 2000);

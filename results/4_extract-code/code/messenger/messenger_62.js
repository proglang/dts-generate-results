var messenger = require('messenger');

// here we have 4 servers listening on 4 different ports
var server1 = messenger.createListener(8001);
var server2 = messenger.createListener(8002);
var server3 = messenger.createListener(8003);
var server4 = messenger.createListener('127.0.0.1:8004');

server1.on('a message came', function(m, data){
  m.reply({greetings:'server 1 got some data'});
});

server2.on('a message came', function(){
  m.reply({greetings:'server 2 got some data'});
});

server3.on('a message came', function(){
  m.reply({greetings:'server 3 got some data'});
});

server4.on('a message came', function(){
  m.reply({greetings:'server 4 got some data'});
});

// a client that can be used to emit to all the servers
var client = messenger.createSpeaker(8001, 8002, 8003, 8004);

setTimeout(function(){
  // request here instead of shout to only access 1 server
  client.request('a message came', {some: 'data'}, function(data){
    console.log(data.greetings);
  });
}, 2000);

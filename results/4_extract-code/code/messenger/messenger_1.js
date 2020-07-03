var messenger = require('messenger');

client = messenger.createSpeaker(8000);
server = messenger.createListener(8000);

server.on('give it to me', function(message, data){
  message.reply({'you':'got it'})
});

setInterval(function(){
  client.request('give it to me', {hello:'world'}, function(data){
    console.log(data);
  });
}, 1000);

var messenger = require('messenger');

var server = messenger.createListener(8000);
var client = messenger.createSpeaker(8000);

function authRequired(m, data) {
  if (data.authorized) {
    m.data.coolness = 10; // modify m.data if you want it passed, not data
    m.next(); // continuation passing
    return;
  }
  m.reply({error:'not authorized'});
}

server.on('protected request', authRequired, function(m, data){
  m.reply({you:'got past security with a coolness factor of ' + data.coolness})
});

var auth = false;
setInterval(function(){
  
  client.request('protected request', {authorized:auth}, function(data){
    console.log(data);
  })
  
  if (auth === false) {
    auth = true;
  } else {
    auth = false;
  }
}, 2000);

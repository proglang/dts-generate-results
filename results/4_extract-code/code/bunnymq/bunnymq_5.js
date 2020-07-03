const bunnymq = require('bunnymq')({ host: 'amqp://localhost' });

bunnymq.subscribe('queue:name', function (msg) {
  //msg is the exact item sent by a producer as payload
  //if it is an object, it is already parsed as object
});

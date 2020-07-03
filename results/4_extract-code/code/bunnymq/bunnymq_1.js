const bunnymq = require('bunnymq')({ host: 'amqp://localhost' });
bunnymq.publish('queue:name', 'Hello World!');

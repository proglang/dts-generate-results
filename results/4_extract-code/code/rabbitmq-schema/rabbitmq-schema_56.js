var RabbitSchema = require('rabbitmq-schema')

var queueSchema = new RabbitSchema({
  queue: 'queue-name', // queue name, required
  messageSchema: { // "json-schema" for validating queue messages
    type: 'object'
    // ...other properties supported by json-schema draft-04...
    // http://json-schema.org
  },
  options: {} // queue options, optional
})

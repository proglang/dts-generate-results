var RabbitSchema = require('rabbitmq-schema')

var fanoutExchangeSchema = new RabbitSchema({
  exchange: 'fanout-exchange-name', // exchange name, required
  type: 'fanout',  // required to be direct, topic, or fanout
  bindings: [{     // atleast 1 binding is required for every exchange
    destination: queueSchema, // all bindings require a destination (queue or exchange schema)
    args: {}                  // binding args, optional
  }],
  options: {} // exchange options, optional
})

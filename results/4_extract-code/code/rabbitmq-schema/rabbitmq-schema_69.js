var RabbitSchema = require('rabbitmq-schema')

var directExchangeSchema = new RabbitSchema({
  exchange: 'direct-exchange-name', // exchange name, required
  type: 'direct',  // required to be direct, topic, or fanout
  bindings: [{     // atleast 1 binding is required for every exchange
    routingPattern: 'foo.bar', // direct exchanges require bindings w/ a routingPattern
    destination: queueSchema,  // all bindings require a destination (queue or exchange schema)
    args: {}                   // binding args, optional
  }],
  options: {} // exchange options, optional
})

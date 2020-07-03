var RabbitSchema = require('rabbitmq-schema')

// validate a direct exchange topology
var topicExchangeSchema = new RabbitSchema({
  exchange: 'topic-exchange-name', // exchange name, required
  type: 'topic',  // required to be direct, topic, or fanout
  bindings: [{     // atleast 1 binding is required for every exchange
    routingPattern: 'foo.*', // topic exchanges require bindings w/ a routingPattern
    destination: queueSchema // all bindings require a destination (queue or exchange schema)
    args: {}                 // binding args, optional
  }],
  options: {} // exchange options, optional
})

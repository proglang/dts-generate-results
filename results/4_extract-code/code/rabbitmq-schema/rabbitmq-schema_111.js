var RabbitSchema = require('rabbitmq-schema')

var foobarQueue = {
  queue: 'foobar-name', // queue name, required
  messageSchema: { // "json-schema" for validating queue messages
    type: 'object',
    properties: {
      foo: { type: 'string' }
    },
    required: ['foo']
    // ...other properties supported by json-schema draft-04...
    // http://json-schema.org
  }
}

var fooquxQueue = {
  queue: 'fooqux-name', // queue name, required
  messageSchema: { // "json-schema" for validating queue messages
    type: 'string'
    // ...other properties supported by json-schema draft-04...
    // http://json-schema.org
  },
  options: {} // queue options, optional
}

var foobarExchange = {
  exchange: 'foobar-direct-exchange', // exchange name, required
  type: 'direct',  // required to be direct, topic, or fanout
  bindings: [{     // atleast 1 binding is required for every exchange
    routingPattern: 'foo.bar', // direct exchanges require bindings w/ a routingPattern
    destination: foobarQueue,  // all bindings require a destination (queue or exchange schema)
    args: {}                   // binding args, optional
  }],
  options: {} // exchange options, optional
}

var fooquxExchange = {
  exchange: 'fooqux-direct-exchange', // exchange name, required
  type: 'direct',  // required to be direct, topic, or fanout
  bindings: [{     // atleast 1 binding is required for every exchange
    routingPattern: 'foo.qux', // direct exchanges require bindings w/ a routingPattern
    destination: fooquxQueue,  // all bindings require a destination (queue or exchange schema)
    args: {}                   // binding args, optional
  }],
  options: {} // exchange options, optional
}

var foostarExchange = {
  exchange: 'foostar-topic-exchange', // exchange name, required
  type: 'topic',  // required to be direct, topic, or fanout
  bindings: [{     // atleast 1 binding is required for every exchange
    routingPattern: 'foo.*',    // topic exchanges require bindings w/ a routingPattern
    destination: foobarExchange,// all bindings require a destination (queue or exchange schema)
    args: {}                    // binding args, optional
  }],
  options: {} // exchange options, optional
}

var fullSchema = new RabbitSchema(foostarExchange) // full nested, connected topology

// also works with parallel, nested, disconnected topologies

var altSchema = new RabbitSchema([
  {
    exchange: 'some-exchange',
    type: 'direct',
    bindings: [{
      routingPattern: 'foo.bar',
      destination: foobarQueue
    }]
  },
  {
    exchange: 'some-exchange3',
    type: 'topic',
    bindings: [{
      routingPattern: 'foo.*',
      destination: fooquxQueue
    }]
  }
])

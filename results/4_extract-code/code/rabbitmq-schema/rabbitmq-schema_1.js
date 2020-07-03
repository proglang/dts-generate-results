var RabbitSchema = require('rabbitmq-schema')
// Validate your rabbit topology by instantiating a RabbitSchema
var schema = new RabbitSchema({
  exchange: 'exchange0', // exchange name
  type: 'direct',        // exchange type
  options: {},            // optional, assert or check exchange options
  bindings: [{
    routingPattern: 'foo.bar.key', // required for direct and topic exchanges
    destination: {
      queue: 'queue0',         // queue name
      messageSchema: {}        // json-schema to validate messages w/, http://json-schema.org
    },
    args: {}                   // optional, binding args
  }]
})
// Get all exchanges in the topology,
//   returned exchanges are RabbitSchema instances
var exchanges = schema.getExchanges()
var exchange = exchanges[0]
exchange.exchange // name
exchange.options  // exchange options (for assert or check)
exchange.getDirectBindings() // direct child bindings, explained below
exchange.getQueues() // child queues
exchanges.getExchanges() // self and child exchanges
// Get all queues in the topology,
//   returned queues are RabbitSchema instances
var queues = schema.getQueues()
var queue = queues[0]
queue.queue   // name
queue.options // queue options
queue.messageSchema // queue message "json-schema", http://json-schema.org
// Get all bindings in the topology,
//   returned bindings contain `source` and `destination` RabbitSchema instances
var bindings = schema.getBindings()
var binding = bindings[0]
binding.source // source exchange, RabbitSchema
binding.destination // destination exchange or queue, RabbitSchema
binding.routingPattern // routing pattern for direct or topic queue
// Get direct bindings in the topology,
//   returned bindings contain `source` and `destination` RabbitSchema instances
var directBindings = schema.getDirectBindings() // [ /* queue0 */ ]
// Get a queue by name (in entire topology),
//   returns queue RabbitSchema
var queue = schema.getQueueByName('queue0')
// Get an exchange by name (in entire topology),
//   returns exchange RabbitSchema
var queue = schema.getExchangeByName('exchange0')
// Validate a message by exchange and routingKey
//   will find all queues the message makes it to
//   and validate the message against all the `messageSchema`s
schema.validateMessage('exchange0', 'foo.bar.key', { foo: 1 })
// Also works with direct queues, by providing queue name
schema.validateMessage('queue0', { foo: 1 })

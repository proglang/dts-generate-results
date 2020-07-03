var amqplib = require('amqplib')
var callbackCount = require('callback-count')

amqplib.connect('amqp://192.168.99.100:32771', function (err, conn) {
  conn.createChannel(function (channel) {
    // connected to rabbitmq, assert all the things
    assertExchanges(channel, fullSchema, function (err) {
      if (err) { throw err }
      assertQueues(channel, fullSchema, function (err) {
        if (err) { throw err }
        assertBindings(channel, fullSchema, function (err) {
          if (err) { throw err }
        })
      })
    })
  })
})
// assert all exchanges in the schema
function assertExchanges (channel, fullSchema, cb) {
  var count = callbackCount(exchanges.length, cb)
  var exchanges = fullSchema.getExchanges()

  exchanges.forEach(function (exchange) {
    var name = exchange.exchange
    var type = exchange.type
    var opts = exchange.options
    channel.assertExchange(name, type, opts, count.next)
  })
}
// assert all queues in the schema
function assertQueues (channel, fullSchema, cb) {
  var count = callbackCount(queues.length, cb)
  var queues = fullSchema.getQueues()

  queues.forEach(function (queue) {
    var name = queue.queue
    var opts = exchange.options
    channel.assertQueue(name, opts, count.next)
  })
}
// assert all bindings in the schema
function assertBindings (channel, fullSchema, cb) {
  var count = callbackCount(exchanges.length, cb)
  var bindings = fullSchema.getBindings()

  bindings.forEach(function (binding) {
    // source is always an exchange
    var srcName = bindings.source.exchange
    var destName

    if (binding.destination.exchange) {
      // destination is an exchange
      destName = binding.destination.exchange
      channel.bindExchange(destName, srcName, binding.routingPattern, binding.args)
    } else {
      // destination is a queue
      destName = binding.destination.queue
      channel.bindQueue(destName, srcName, binding.routingPattern, binding.args)
    }
  })
}

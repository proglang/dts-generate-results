const fastify = require('fastify')
const Boom = require('boom')

fastify.register(require('fastify-accepts'))

fastify.post('/', function (req, reply) {
  const accept = req.accepts() // Accepts object
  switch(accept.type(['json', 'html'])) {
    case 'json':
      reply.type('application/json').send({hello: 'world'})
      break
    case 'html':
      reply.type('text/html').send('<b>hello, world!</b>')
      break
    default:
      reply.send(Boom.notAcceptable('unacceptable'))
      break
  }
})

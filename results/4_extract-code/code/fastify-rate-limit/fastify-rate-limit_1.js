const fastify = require('fastify')()

fastify.register(require('fastify-rate-limit'), {
  max: 100,
  timeWindow: '1 minute'
})

fastify.get('/', (req, reply) => {
  reply.send({ hello: 'world' })
})

fastify.listen(3000, err => {
  if (err) throw err
  console.log('Server listening at http://localhost:3000')
})

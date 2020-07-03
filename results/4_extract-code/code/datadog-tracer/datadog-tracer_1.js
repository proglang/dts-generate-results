const express = require('express')
const Tracer = require('datadog-tracer')

const app = express()
const tracer = new Tracer({ service: 'example' })

// handle errors from Datadog agent. omit this if you want to ignore errors
tracer.on('error', e => console.log(e))

app.get('/hello/:name', (req, res) => {
  const span = tracer.startSpan('say_hello')

  span.addTags({
    'resource': '/hello/:name', // required by Datadog
    'type': 'web', // required by Datadog
    'span.kind': 'server',
    'http.method': 'GET',
    'http.url': req.url,
    'http.status_code': '200'
  })

  span.finish()

  res.send(`Hello, ${req.params.name}!`)
})

app.listen(3000)

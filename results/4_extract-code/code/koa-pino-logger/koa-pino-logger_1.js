'use strict'

var koa = require('koa')
var logger = require('koa-pino-logger')

var app = new Koa()
app.use(logger())

app.use((ctx) => {
  ctx.log.info('something else')
  ctx.body = 'hello world'
})

app.listen(3000)

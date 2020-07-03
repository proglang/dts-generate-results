'use strict'

var koa = require('koa')
var logger = require('koa-pino-logger')

var app = new Koa()
app.silent = true // disable console.errors
app.use(logger())

app.use((ctx) => {
  ctx.body = 'hello world'
  throw Error('bang!')
})

app.listen(3000)

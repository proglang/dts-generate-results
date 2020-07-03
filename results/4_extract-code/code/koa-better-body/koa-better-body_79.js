const app = require('koa')()
const body = require('koa-better-body')

app.use(body({
  multipart: false
  querystring: require('qs')
}))

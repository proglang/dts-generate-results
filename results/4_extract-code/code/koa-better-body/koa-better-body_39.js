var koa = require('koa')
var body = require('koa-better-body')
var app = koa()

app
  .use(body())
  .use(function * () {
    console.log(this.request.body)    // if buffer or text
    console.log(this.request.files)   // if multipart or urlencoded
    console.log(this.request.fields)  // if json
  })
  .listen(8080, function () {
    console.log('koa server start listening on port 8080')
  })

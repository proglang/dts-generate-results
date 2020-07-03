const app = require('koa')()
const body = require('koa-better-body')

app.use(body({
  textLimit: '300kb'
  extendTypes: {
    custom: [
      'foo/bar-x',
      'text/quix'
    ]
  },
  handler: function * (ctx, opts) {
    // `ctx` is equal to `this` and `app`
    // `opts` is current options object
    // passed to `koa-better-body`
    ctx.body = yield this.request.text(opts.textLimit)
  }
}))
app.use(function * showBody () {
  // `this.body` is text
  console.log(this.body)
})

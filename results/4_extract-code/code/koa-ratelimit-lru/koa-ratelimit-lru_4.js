const ratelimit = require('koa-ratelimit-lru')
const Koa = require('koa')
const app = new Koa()

// apply rate limit

app.use(ratelimit({
  duration: 60000,
  rate: 100,
  id (ctx) {
    return ctx.ip
  },
  headers: {
    remaining: 'Rate-Limit-Remaining',
    reset: 'Rate-Limit-Reset',
    total: 'Rate-Limit-Total'
  },
  errorMessage: 'Sometimes You Just Have to Slow Down.'
}))

// response middleware

app.use(ctx => {
  ctx.body = 'Hello World'
})

app.listen(3000, _ => console.log('listening on port 3000'))

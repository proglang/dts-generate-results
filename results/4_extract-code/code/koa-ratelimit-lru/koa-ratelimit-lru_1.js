const ratelimit = require('koa-ratelimit-lru')
const Koa = require('koa')
const router = require('koa-router')()
const app = new Koa()
const store = require('lru-cache')()

// Note: When you using custom store, duration and max would lose efficacy

router.get(
    '/foo',
    ratelimit({
        store,
        rate: 5,
        prefix: 'foo:'
    }),
    ctx => ctx.body = 'foo'
)

router.get(
    '/bar',
    ratelimit({
        store,
        rate: 10,
        prefix: 'bar:'
    }),
    ctx => ctx.body = 'bar'
)

// response middleware

app.use(router.routes())

app.listen(3000, _ => console.log('listening on port 3000'))

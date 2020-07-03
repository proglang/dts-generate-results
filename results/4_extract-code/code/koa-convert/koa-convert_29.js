const Koa = require('koa') // v2.x
const convert = require('koa-convert')
const app = new Koa()

// ---------- override app.use method ----------

const _use = app.use
app.use = x => _use.call(app, convert(x))

// ---------- end ----------

app.use(modernMiddleware)

// this will be converted to modern promise middleware implicitly
app.use(legacyMiddleware)

function * legacyMiddleware (next) {
  // before
  yield next
  // after
}

function modernMiddleware (ctx, next) {
  // before
  return next().then(() => {
    // after
  })
}

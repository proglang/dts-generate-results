const e2k = require('express-to-koa')

// Some express middleware
const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath,
  quiet: true
})

const app = new Koa()
app.use(e2k(devMiddleware))

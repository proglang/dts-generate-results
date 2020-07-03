const {
  CONTEXT
} = require('express-to-koa')

app.use(e2k(
  (req, res) => {
    // We can access koa context by
    req[CONTEXT]

    // Or
    res[CONTEXT]
  }
))

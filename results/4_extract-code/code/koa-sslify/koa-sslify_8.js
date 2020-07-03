const { default: sslify } = require('koa-sslify');

app.use(sslify({
  resolver: (ctx) => ctx.request.header['x-is-secure'] === 'yup!'
}))

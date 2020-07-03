var http = require('http')
var logger = require('pino-http')({
  serializers: {
    req (req) {
      Object.keys(req.raw).forEach((k) => {
        if (k.startsWith('foo')) {
          req[k] = req.raw[k]
        }
      })
      return req
    }
  }
})

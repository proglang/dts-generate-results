var connect = require('connect')
var errorhandler = require('errorhandler')

var app = connect()

if (process.env.NODE_ENV === 'development') {
  // only use in development
  app.use(errorhandler())
}

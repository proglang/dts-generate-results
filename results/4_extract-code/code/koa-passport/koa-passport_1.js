// body parser
const bodyParser = require('koa-bodyparser')
app.use(bodyParser())

// Sessions
const session = require('koa-session')
app.keys = ['secret']
app.use(session({}, app))

const passport = require('koa-passport')
app.use(passport.initialize())
app.use(passport.session())

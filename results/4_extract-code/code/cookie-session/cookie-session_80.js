var cookieSession = require('cookie-session')
var express = require('express')
var Keygrip = require('keygrip')

var app = express()

app.use(cookieSession({
  name: 'session',
  keys: new Keygrip(['key1', 'key2'], 'SHA384', 'base64')
}))

// ... your logic here ...

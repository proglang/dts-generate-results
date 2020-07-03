var assert = require('http-assert')
var ok = require('assert')

var username = 'foobar' // username from request

try {
  assert(username === 'fjodor', 401, 'authentication failed')
} catch (err) {
  ok(err.status === 401)
  ok(err.message === 'authentication failed')
  ok(err.expose)
}

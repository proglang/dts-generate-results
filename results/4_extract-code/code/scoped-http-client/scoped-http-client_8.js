var scopedClient = require('./lib')
  , util         = require('util')

var client = scopedClient.create('https://api.github.com')
  .header('accept', 'application/json')
  .path('user/show/technoweenie')
  .get()(function(err, resp, body) {
    util.puts(body)
  })

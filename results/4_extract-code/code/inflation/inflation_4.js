var inflate = require('inflation')
var raw     = require('raw-body')

http.createServer(function (req, res) {
  raw(inflate(req), 'utf-8', function (err, string) {
    console.dir(string)
  })
})

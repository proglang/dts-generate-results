const http = require('http')
const express = require('experss')
const listen = require('test-listen')

const srv = express()

test('urls', async t => {
  let url = await listen(http.createServer(srv))
  t.ok(url == 'http://localhost:11401')
})

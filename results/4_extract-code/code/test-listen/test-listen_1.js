const http = require('http')
const listen = require('test-listen')

const srv = http.createServer((req, res) => res.end('1'))
const srv2 = http.createServer((req, res) => res.end('2'))

test('urls', async t => {
  let url = await listen(srv)
  t.ok(url == 'http://localhost:11401')
  let url = await listen(srv2)
  t.ok(url == 'http://localhost:42333')
})

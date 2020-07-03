const http = require('http')
const Koa = require('koa')
const listen = require('test-listen')

const srv = new Koa();

test('urls', async t => {
  let url = await listen(http.createServer(srv.callback()))
  t.ok(url == 'http://localhost:11401')
})

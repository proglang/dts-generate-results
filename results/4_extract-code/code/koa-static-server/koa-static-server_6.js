// example 'web' directory
// web/index.html
// web/file.txt

var serve = require('koa-static-server')
var app = require('koa')()

// root index support
// GET /
// returns index.html
// GET /file.txt
// returns file.txt
app.use(serve({rootDir: 'web'}))

// folder support
// GET /web/
// returns /web/index.html
// GET /web/file.txt
// returns /web/file.txt
app.use(serve({rootDir: 'web', rootPath: '/web'}))

// index support
// GET /
// returns /file.txt
app.use(serve({rootDir: 'web', index: 'file.txt'}))

// rewrite support
// GET /web/
// returns 404
// GET /admin
// returns /admin/index.html
app.use(serve({rootDir: 'web', rootPath: '/admin'}))

app.listen(3000)

console.log('listening on port 3000')

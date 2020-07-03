var LRU = require('lru-cache')
var files = new LRU({ max: 1000 })

app.use(staticCache({
  dir: '/public',
  dynamic: true,
  files: files
}))

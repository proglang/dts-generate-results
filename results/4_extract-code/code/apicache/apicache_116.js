
var apicache  = require('apicache')
var cache     = apicache.middleware

// GET collection/id
app.get('/api/:collection/:id?', cache('1 hour'), function(req, res, next) {
  req.apicacheGroup = req.params.collection
  // do some work
  res.send({ foo: 'bar' })
});

// POST collection/id
app.post('/api/:collection/:id?', function(req, res, next) {
  // update model
  apicache.clear(req.params.collection)
  res.send('added a new item, so the cache has been cleared')
});


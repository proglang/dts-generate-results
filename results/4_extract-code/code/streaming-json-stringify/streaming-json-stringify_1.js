var Stringify = require('streaming-json-stringify')

app.get('/things', function (req, res, next) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8')

  db.things.find()
  .stream()
  .pipe(Stringify())
  .pipe(res)
})

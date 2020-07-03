var ok = require('okay');
app.use(require('express-domain-middleware'));
app.use(app.router);
app.use(function errorHandler(err, req, res, next) {
  console.log('error on request %d %s %s: %j', process.domain.id, req.method, req.url, err);
  res.send(500, "Something bad happened. :(");
});
app.get('/error', function(req, res, next) {
  db.query('SELECT happiness()', ok(next, function(rows) {
    fs.readFile('asldkfjasdf', ok(next, function(contents) {
      process.nextTick(ok(next, function() {
        throw new Error("The individual request will be passed to the express error handler, and your application will keep running.");
      }));
    }));
  }));
});

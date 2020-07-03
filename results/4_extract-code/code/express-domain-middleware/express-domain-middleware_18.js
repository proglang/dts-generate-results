//with domain-middleware
app.use(require('express-domain-middleware'));
app.use(app.router);
app.use(function errorHandler(err, req, res, next) {
  console.log('error on request %d %s %s', process.domain.id, req.method, req.url);
  console.log(err.stack);
  res.send(500, "Something bad happened. :(");
  if(err.domain) {
    //you should think about gracefully stopping & respawning your server
    //since an unhandled error might put your application into an unknown state
  }
});
app.get('/error', function(req, res, next) {
  db.query('SELECT happiness()', process.domain.intercept(function(rows) {
    fs.readFile('asldkfjasdf', process.domain.intercept(function(contents) {
      process.nextTick(process.domain.intercept(function() {
        throw new Error("The individual request will be passed to the express error handler, and your application will keep running.");
      }));
    }));
  }));
});

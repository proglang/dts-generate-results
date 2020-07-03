var http = require('http');
var urlrouter = require('urlrouter');

var options = {
  pageNotFound: function (req, res) {
    res.statusCode = 404;
    res.end('er... some page miss...');
  },
  errorHandler: function (req, res) {
    res.statusCode = 500;
    res.end('oops..error occurred');
  }
};

function loadUser(req, res, next) {
  // You would fetch user from the db
  var user = users[req.params.id];
  if (user) {
    req.user = user;
    next();
  } else {
    next(new Error('Failed to load user ' + req.params.id));
  }
}

var routerMiddleware = urlrouter(function (app) {
  app.get('/', function (req, res) {
    res.end('GET home page' + req.url + ' , headers: ' + JSON.stringify(req.headers));
  });
  // with route middleware
  app.get('/user/:id', loadUser, function (req, res) {
    res.end('user: ' + req.params.id);
  });

  // GET /admin 301 redirect to /admin/
  app.redirect('/admin', '/admin/');

  app.get(/^\/users?(?:\/(\d+)(?:\.\.(\d+))?)?/, loadUser, function (req, res) {
    res.end(req.url + ' : ' + req.params);
  });

  app.get('/foo', function (req, res) {
    res.end('GET ' + req.url + ' , headers: ' + JSON.stringify(req.headers));
  });

  app.post('/new', function (req, res) {
    res.write('POST ' + req.url + ' start...\n\n');
    var counter = 0;
    req.on('data', function (data) {
      counter++;
      res.write('data' + counter + ': ' + data.toString() + '\n\n');
    });
    req.on('end', function () {
      res.end('POST ' + req.url + ' end.\n');
    });
  });

  app.put('/update', function (req, res) {
    res.end('PUT ' + req.url + ' , headers: ' + JSON.stringify(req.headers));
  });

  app.delete('/remove', function (req, res) {
    res.end('DELETE ' + req.url + ' , headers: ' + JSON.stringify(req.headers));
  });

  app.options('/check', function (req, res) {
    res.end('OPTIONS ' + req.url + ' , headers: ' + JSON.stringify(req.headers));
  });

  app.all('/all', function (req, res) {
    res.end('ALL methods request /all should be handled' + ' , headers: ' + JSON.stringify(req.headers));
  });
}, options);

http.createServer(routerMiddleware).listen(3000);

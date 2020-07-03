// setup.js

var createNamespace = require('continuation-local-storage').createNamespace;
var session = createNamespace('my session');

var db = require('./lib/db.js');

function start(options, next) {
  db.fetchUserById(options.id, function (error, user) {
    if (error) return next(error);

    session.set('user', user);

    next();
  });
}

var readdir = require('readdir-enhanced');
var through2 = require('through2');

// Synchronous API
var files = readdir.sync('my/directory');

// Callback API
readdir.async('my/directory', function(err, files) { ... });

// Promises API
readdir.async('my/directory')
  .then(function(files) { ... })
  .catch(function(err) { ... });

// EventEmitter API
readdir.stream('my/directory')
  .on('data', function(path) { ... })
  .on('file', function(path) { ... })
  .on('directory', function(path) { ... })
  .on('symlink', function(path) { ... })
  .on('error', function(err) { ... });

// Streaming API
var stream = readdir.stream('my/directory')
  .pipe(through2.obj(function(data, enc, next) {
    console.log(data);
    this.push(data);
    next();
  });

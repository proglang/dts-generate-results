var readdir = require('readdir-enhanced');
var readdirSync = readdir.sync;

// Use it just like Node's built-in fs.readdir function
readdir('my/directory', function(err, files) { ... });

// Use it just like Node's built-in fs.readdirSync function
var files = readdirSync('my/directory');

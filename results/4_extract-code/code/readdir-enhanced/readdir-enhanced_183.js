var readdir = require('readdir-enhanced');

// Synchronous API
var stats = readdir.sync.stat('my/directory');
var stats = readdir.readdirSyncStat('my/directory');

// Async API
readdir.async.stat('my/directory', function(err, stats) { ... });
readdir.readdirAsyncStat('my/directory', function(err, stats) { ... });

// Streaming API
readdir.stream.stat('my/directory')
  .on('data', function(stat) { ... })
  .on('file', function(stat) { ... })
  .on('directory', function(stat) { ... })
  .on('symlink', function(stat) { ... });

readdir.readdirStreamStat('my/directory')
  .on('data', function(stat) { ... })
  .on('file', function(stat) { ... })
  .on('directory', function(stat) { ... })
  .on('symlink', function(stat) { ... });


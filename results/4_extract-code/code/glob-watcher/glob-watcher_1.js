var watch = require('glob-watcher');

watch(['./*.js', '!./something.js'], function(done){
  // This function will be called each time a globbed file is changed
  // but is debounced with a 200ms delay (default) and queues subsequent calls

  // Make sure to signal async completion with the callback
  // or by returning a stream, promise, observable or child process
  done();

  // if you need access to the `path` or `stat` object, listen
  // for the `change` event (see below)

  // if you need to listen to specific events, use the returned
  // watcher instance (see below)
});

// Raw chokidar instance
var watcher = watch(['./*.js', '!./something.js']);

// Listen for the 'change' event to get `path`/`stat`
// No async completion available because this is the raw chokidar instance
watcher.on('change', function(path, stat) {
  // `path` is the path of the changed file
  // `stat` is an `fs.Stat` object (not always available)
});

// Listen for other events
// No async completion available because this is the raw chokidar instance
watcher.on('add', function(path, stat) {
  // `path` is the path of the changed file
  // `stat` is an `fs.Stat` object (not always available)
});

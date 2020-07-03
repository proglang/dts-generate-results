var readdir = require('readdir-enhanced');

// Build the stream using the Streaming API
var stream = readdir.stream('my/directory')
  .on('data', function(path) { ... });

// Listen to the end event to detect the end of the stream
stream.on('end', function() {
  console.log('Stream finished!');
});

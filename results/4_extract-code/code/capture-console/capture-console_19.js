var capcon = require('capture-console');

// our buffer
var output = '';

// the first parameter here is the stream to capture, and the
// second argument is the function receiving the output
capcon.startCapture(process.stdout, function (stdout) {
  output += stdout;
});

// whatever is done here has stdout captured - but note
// that `output` is updated throughout execution

capcon.stopCapture(process.stdout);

// anything logged here is no longer captured

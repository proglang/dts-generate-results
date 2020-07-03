var capcon = require('capture-console');

var stderr = capcon.captureStderr(function scope() {
  // whatever is done in here has stderr captured,
  // the return value is a string containing stderr
});

var stdout = capcon.captureStdout(function scope() {
  // whatever is done in here has stdout captured,
  // the return value is a string containing stdout
});

var stdio = capcon.captureStdio(function scope() {
  // whatever is done in here has both stdout and stderr captured,
  // the return value is an object with 'stderr' and 'stdout' keys
});

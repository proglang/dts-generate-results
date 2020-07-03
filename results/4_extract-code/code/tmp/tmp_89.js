var tmp = require('tmp');

tmp.file({ detachDescriptor: true }, function _tempFileCreated(err, path, fd, cleanupCallback) {
  if (err) throw err;

  cleanupCallback();
  // Application can store data through fd here; the space used will automatically
  // be reclaimed by the operating system when the descriptor is closed or program
  // terminates.
});

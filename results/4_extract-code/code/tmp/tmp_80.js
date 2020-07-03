var tmp = require('tmp');

tmp.file({ discardDescriptor: true }, function _tempFileCreated(err, path, fd, cleanupCallback) {
  if (err) throw err;
  // fd will be undefined, allowing application to use fs.createReadStream(path)
  // without holding an unused descriptor open.
});

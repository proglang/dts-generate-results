var lockFile = require('lockfile')

// opts is optional, and defaults to {}
lockFile.lock('some-file.lock', opts, function (er) {
  // if the er happens, then it failed to acquire a lock.
  // if there was not an error, then the file was created,
  // and won't be deleted until we unlock it.

  // do my stuff, free of interruptions
  // then, some time later, do:
  lockFile.unlock('some-file.lock', function (er) {
    // er means that an error happened, and is probably bad.
  })
})

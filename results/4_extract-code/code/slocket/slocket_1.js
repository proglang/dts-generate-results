var slocket = require('slocket')

// Only one of these can run in this filesystem space,
// even if there are many processes running at once
function someMutexedThing (cb) {
  slocket('/path/to/my-lock-name', function (er, lock) {
    if (er) throw er
    // lock acquired
    // do your thing here
    // and then...
    lock.release()
  })
}

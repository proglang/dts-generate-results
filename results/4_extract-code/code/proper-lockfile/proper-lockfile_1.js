const lockfile = require('proper-lockfile');

lockfile.lock('some/file')
.then((release) => {
    // Do something while the file is locked

    // Call the provided release function when you're done,
    // which will also return a promise
    return release();
})
.catch((e) => {
    // either lock could not be acquired
    // or releasing it failed
    console.error(e)
});

// Alternatively, you may use lockfile('some/file') directly.

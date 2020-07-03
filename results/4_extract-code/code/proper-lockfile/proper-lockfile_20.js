const lockfile = require('proper-lockfile');

lockfile.lock('some/file')
.then(() => {
    // Do something while the file is locked

    // Later..
    return lockfile.unlock('some/file');
});

const lockfile = require('proper-lockfile');

lockfile.check('some/file')
.then((isLocked) => {
    // isLocked will be true if 'some/file' is locked, false otherwise
});

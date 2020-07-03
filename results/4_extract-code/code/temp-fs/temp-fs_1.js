var tempfs = require('temp-fs');

// Create a tempfile in the system-provided tempdir.
tempfs.open(function (err, file) {
    if (err) { throw err; }

    console.log(file.path, file.fd);
    // async
    file.unlink(function () {
        console.log('File delected');
    });
    // sync
    // No problem even if unlink() is called twice.
    file.unlink();
});

// Create a tempdir in current directory.
tempfs.mkdir({
    dir: '.',
    recursive: true,  // It and its content will be remove recursively.
    track: true  // Track this directory.
}, function (err, dir) {
    if (err) { throw err; }

    console.log(dir.path, dir.recursive);
    throw new Error('Since it is tracked, tempfs will remove it for you.');
    dir.unlink();
});

var fs = require('fs-ext');
var fd = fs.openSync('foo.txt', 'r');
fs.flock(fd, 'ex', function (err) {
    if (err) {
        return console.log("Couldn't lock file");
    }
    // file is locked
})

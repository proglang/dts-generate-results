var commandExistsSync = require('command-exists').sync;
// returns true/false; doesn't throw
if (commandExistsSync('ls')) {
    // proceed
} else {
    // ...
}


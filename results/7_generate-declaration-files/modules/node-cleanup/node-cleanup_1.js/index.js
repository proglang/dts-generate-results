var nodeCleanup = require('node-cleanup');

nodeCleanup(function (exitCode, signal) {
    // release resources here before node exits
});

var nodeCleanup = require('node-cleanup');
var fork = require('child_process').fork;

var child = fork('path-to-child-script.js');
child.on('exit', function (exitCode, signal) {
    child = null; // enable the cleanup handler
    if (signal === 'SIGINT')
        process.kill(process.pid, 'SIGINT');
});

nodeCleanup(function (exitCode, signal) {
    if (child !== null && signal === 'SIGINT')
        return false; // don't exit yet
    // release resources here before node exits
});

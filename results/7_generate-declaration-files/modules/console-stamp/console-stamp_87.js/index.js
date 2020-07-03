// Extending the console object with custom methods
console.debug = function(msg) {
    console.log(msg);
}
console.fatal = function(msg) {
    console.log(msg);
    process.exit(1);
}

// Initialising the output formatter
require('console-stamp')(console, {
    pattern: 'HH:MM:ss',
    extend: {
        debug: 5,
        fatal: 0,
    },
    include: ['debug', 'info', 'warn', 'error', 'fatal'],
    level: 'debug',
});

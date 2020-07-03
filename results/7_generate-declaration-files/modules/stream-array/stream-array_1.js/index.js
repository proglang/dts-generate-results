var streamify = require('stream-array'),
    os = require('os');

streamify(['1', '2', '3', os.EOL]).pipe(process.stdout);

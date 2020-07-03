const util = require('util');

require('console-stamp')(console, {
    pattern: 'HH:MM:ss.l',
    metadata: function(){ return '[' + (process.memoryUsage().rss) + ']'; });

console.log('Metadata applied.');

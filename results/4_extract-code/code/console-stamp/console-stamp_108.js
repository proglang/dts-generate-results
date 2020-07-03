require('console-stamp')(console, {
    pattern: 'HH:MM:ss.l',
    metadata: '[' + process.pid + ']'
});

console.log('Metadata applied.');

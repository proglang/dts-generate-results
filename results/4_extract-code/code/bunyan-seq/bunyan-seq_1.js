let bunyan = require('bunyan');
let seq = require('bunyan-seq');

var log = bunyan.createLogger({
    name: 'myapp',
    streams: [
        {
            stream: process.stdout,
            level: 'warn',
        },
        seq.createStream({
            serverUrl: 'http://localhost:5341',
            level: 'info'
        })
    ]
});

log.info('Hi!');
log.warn({lang: 'fr'}, 'Au revoir');

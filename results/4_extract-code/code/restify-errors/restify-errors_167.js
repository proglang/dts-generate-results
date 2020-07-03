var bunyan = require('bunyan');
var restifyErrors = require('restify-errors');

var log = bunyan.createLogger({
    name: 'myLogger',
    serializers: restifyErrors.bunyanSerializer.create({
        topLevelFields: true
    })
});

var err = new Error('pull!');
err.espresso = 'normale';

log.error(err, 'oh noes!');

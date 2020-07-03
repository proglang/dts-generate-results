var bunyan = require('bunyan');
var restifyErrors = require('restify-errors');

var log = bunyan.createLogger({
    name: 'myLogger',
    serializers: {
        err: restifyErrors.bunyanSerializer
    }
});

var err = new restifyErrors.InternalServerError({
    info: {
        foo: 'bar',
        bar: 1
    }
}, 'cannot service this request');

log.error(err, 'oh noes');

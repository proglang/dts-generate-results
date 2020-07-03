var errors = require('restify-errors');

server.get('/foo', function(req, res, next) {

    if (!req.query.foo) {
        return next(new errors.BadRequestError());
    }

    res.send(200, 'ok!');
    return next();
});

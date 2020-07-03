app.use(require('express-bunyan-logger')();
app.use(function(req, res, next) {
    req.log.debug('this is debug in middleware');
    next();
});

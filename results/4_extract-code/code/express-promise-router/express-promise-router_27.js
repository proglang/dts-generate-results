router = require('express-promise-router')();

// still works as expected
router.use('/url', function (req, res, next) {
    next();
});

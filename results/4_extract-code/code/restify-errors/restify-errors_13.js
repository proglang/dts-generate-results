var errors = require('restify-errors');
var nerror = require('@netflix/nerror');

var err = new errors.InternalServerError({
    info: {
        foo: 'bar'
    }
});
errors.info(err);  // => { foo: 'bar' }
verror.info(err);  // => { foo: 'bar' }

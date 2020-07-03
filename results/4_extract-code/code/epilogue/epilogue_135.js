var ForbiddenError = require('epilogue').Errors.ForbiddenError;

before: function(req, res, context) {
    return authenticate.then(function(authed) {
        if(!authed) throw new ForbiddenError();

        return context.continue;
    });
}

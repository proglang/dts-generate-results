var ForbiddenError = require('epilogue').Errors.ForbiddenError;

// disallow deletes on users
userResource.delete.auth(function(req, res, context) {
    throw new ForbiddenError("can't delete a user");
    // optionally:
    // return context.error(403, "can't delete a user");
})

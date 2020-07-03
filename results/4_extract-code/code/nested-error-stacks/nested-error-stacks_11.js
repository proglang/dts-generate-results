var util = require('util');
var NestedError = require('nested-error-stacks');

function MyError(message, nested) {
    NestedError.call(this, message, nested);
}

util.inherits(MyError, NestedError);
MyError.prototype.name = 'MyError';

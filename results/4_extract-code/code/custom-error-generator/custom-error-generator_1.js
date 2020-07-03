var createCustomError = require('custom-error-generator');
var ValidationError = createCustomError('ValidationError', { 'required' : 'Missing parameter x' }, TypeError);
var HTTPError = createCustomError('HTTPError', { 'code' : 500, 'status' : 'Server Error' });

throw new ValidationError('Required');

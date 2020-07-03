var jsen = require('jsen');
var validate = jsen({ type: 'string' });
var valid = validate('some value');             // true

var Ajv = require('ajv');
var ajv = new Ajv({allErrors: true, jsonPointers: true});
// Ajv options allErrors and jsonPointers are required
require('ajv-errors')(ajv /*, {singleError: true} */);

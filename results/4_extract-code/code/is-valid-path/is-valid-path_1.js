var isValid = require('is-valid-path');

/**
 * Valid
 */

isValid('abc.js');
//=> 'true'
isValid('abc/def/ghi.js');
//=> 'true'
isValid('foo.js');
//=> 'true'

/**
 * Invalid
 */

isValid();
//=> 'valse'
isValid(null);
//=> 'valse'
isValid('!foo.js');
//=> 'false'
isValid('*.js');
//=> 'false'
isValid('**/abc.js');
//=> 'false'
isValid('abc/*.js');
//=> 'false'
isValid('abc/(aaa|bbb).js');
//=> 'false'
isValid('abc/[a-z].js');
//=> 'false'
isValid('abc/{a,b}.js');
//=> 'false'
isValid('abc/?.js');
//=> 'false'

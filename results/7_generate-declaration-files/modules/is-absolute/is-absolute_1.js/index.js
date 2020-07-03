var isAbsolute = require('is-absolute');

isAbsolute('a/b/c.js');
//=> 'false'
isAbsolute('/a/b/c.js');
//=> 'true'

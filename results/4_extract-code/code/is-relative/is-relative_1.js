var isRelative = require('is-relative');
console.log(isRelative('README.md'));
//=> true

console.log(isRelative('/User/dev/foo/README.md'));
//=> false

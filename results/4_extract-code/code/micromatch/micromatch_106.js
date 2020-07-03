const mm = require('micromatch');
// mm.capture(pattern, string[, options]);

console.log(mm.capture('test/*.js', 'test/foo.js'));
//=> ['foo']
console.log(mm.capture('test/*.js', 'foo/bar.css'));
//=> null

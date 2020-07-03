const mm = require('micromatch');
// mm.matcher(pattern[, options]);

const isMatch = mm.matcher('*.!(*a)');
console.log(isMatch('a.a')); //=> false
console.log(isMatch('a.b')); //=> true

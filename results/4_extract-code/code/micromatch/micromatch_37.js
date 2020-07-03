const mm = require('micromatch');
// mm.isMatch(string, patterns[, options]);

console.log(mm.isMatch('a.a', ['b.*', '*.a'])); //=> true
console.log(mm.isMatch('a.a', 'b.*')); //=> false

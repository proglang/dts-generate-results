var mm = require('micromatch');
// mm.contains(string, pattern[, options]);

console.log(mm.contains('aa/bb/cc', '*b'));
//=> true
console.log(mm.contains('aa/bb/cc', '*d'));
//=> false

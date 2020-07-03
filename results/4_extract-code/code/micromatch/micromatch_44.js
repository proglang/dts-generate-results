const mm = require('micromatch');
// mm.not(list, patterns[, options]);

console.log(mm.not(['a.a', 'b.b', 'c.c'], '*.a'));
//=> ['b.b', 'c.c']

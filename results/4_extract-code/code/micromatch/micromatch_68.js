const mm = require('micromatch');
// mm.some(list, patterns[, options]);

console.log(mm.some(['foo.js', 'bar.js'], ['*.js', '!foo.js']));
// true
console.log(mm.some(['foo.js'], ['*.js', '!foo.js']));
// false

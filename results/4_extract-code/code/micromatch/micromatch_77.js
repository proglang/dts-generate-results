const mm = require('micromatch');
// mm.every(list, patterns[, options]);

console.log(mm.every('foo.js', ['foo.js']));
// true
console.log(mm.every(['foo.js', 'bar.js'], ['*.js']));
// true
console.log(mm.every(['foo.js', 'bar.js'], ['*.js', '!foo.js']));
// false
console.log(mm.every(['foo.js'], ['*.js', '!foo.js']));
// false

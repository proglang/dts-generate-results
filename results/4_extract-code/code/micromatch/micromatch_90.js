const mm = require('micromatch');
// mm.all(string, patterns[, options]);

console.log(mm.all('foo.js', ['foo.js']));
// true

console.log(mm.all('foo.js', ['*.js', '!foo.js']));
// false

console.log(mm.all('foo.js', ['*.js', 'foo.js']));
// true

console.log(mm.all('foo.js', ['*.js', 'f*', '*o*', '*o.js']));
// true

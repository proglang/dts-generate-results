const mm = require('micromatch');
// mm(list, patterns[, options]);

console.log(mm(['a.js', 'a.txt'], ['*.js']));
//=> [ 'a.js' ]

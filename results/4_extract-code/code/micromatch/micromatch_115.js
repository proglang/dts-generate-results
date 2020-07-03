const mm = require('micromatch');
// mm.makeRe(pattern[, options]);

console.log(mm.makeRe('*.js'));
//=> /^(?:(\.[\\\/])?(?!\.)(?=.)[^\/]*?\.js)$/

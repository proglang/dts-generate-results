const mm = require('micromatch');
// mm.matchKeys(object, patterns[, options]);

const obj = { aa: 'a', ab: 'b', ac: 'c' };
console.log(mm.matchKeys(obj, '*b'));
//=> { ab: 'b' }

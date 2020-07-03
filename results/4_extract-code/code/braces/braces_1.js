const braces = require('braces');
// braces(patterns[, options]);

console.log(braces(['{01..05}', '{a..e}']));
//=> ['(0[1-5])', '([a-e])']

console.log(braces(['{01..05}', '{a..e}'], { expand: true }));
//=> ['01', '02', '03', '04', '05', 'a', 'b', 'c', 'd', 'e']

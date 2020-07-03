var Stats = require('fast-stats').Stats;

var s = new Stats().push(1, 2, 3, 10, 8, 4, 3);
console.log(s.amean().toFixed(2));
// 4.43

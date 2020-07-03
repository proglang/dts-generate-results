var pretty = require('pretty-time');

var start = process.hrtime();
var time = process.hrtime(start);
console.log(pretty(time));
//=> 3μs

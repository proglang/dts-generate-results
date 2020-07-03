var prettyHrtime = require('pretty-hrtime');

var start = process.hrtime();
// do stuff
var end = process.hrtime(start);

var words = prettyHrtime(end);
console.log(words); // '1.2 ms'

words = prettyHrtime(end, {verbose:true});
console.log(words); // '1 millisecond 209 microseconds'

words = prettyHrtime(end, {precise:true});
console.log(words); // '1.20958 ms'

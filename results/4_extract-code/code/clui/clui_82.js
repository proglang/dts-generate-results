var Sparkline = require('clui').Sparkline;
var reqsPerSec = [10,12,3,7,12,9,23,10,9,19,16,18,12,12];

console.log(Sparkline(reqsPerSec, 'reqs/sec'));

var tmp = require('tmp');
var options = {};
var tmpname = tmp.tmpNameSync(options);
console.log('Created temporary filename: ', tmpname);

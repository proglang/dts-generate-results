var tmp = require('tmp');

var name = tmp.tmpNameSync();
console.log('Created temporary filename: ', name);

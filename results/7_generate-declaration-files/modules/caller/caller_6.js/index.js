// bar.js

var caller = require('caller');
console.log(caller()); // `/path/to/foo.js`

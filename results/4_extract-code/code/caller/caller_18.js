// bar.js

var caller = require('caller');

exports.doWork = function () {
    console.log(caller());  // `/path/to/foo.js`
};

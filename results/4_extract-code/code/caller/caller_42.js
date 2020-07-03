// baz.js

var caller = require('caller');

exports.doWork = function () {
    console.log(caller(2));  // `/path/to/foo.js`
};

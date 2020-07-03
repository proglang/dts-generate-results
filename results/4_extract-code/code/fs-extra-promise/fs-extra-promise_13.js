var Bluebird = require('bluebird');
var fs = require('fs-extra-promise').usePromise(Bluebird);

// now use `fs-extra-promise` in the usual way
var promise = fs.readFileAsync(path);

console.log(promise instanceof Bluebird); // true

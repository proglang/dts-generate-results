global.Promise = require('insert-your-promise-polyfill-here');

var emptyDir = require('empty-dir');

emptyDir('./').then(function(result) {
  console.log('Directory is empty:', result);
});

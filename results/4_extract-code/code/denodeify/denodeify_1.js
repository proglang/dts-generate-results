require('es6-promise').polyfill();

var denodeify = require('denodeify');
var readFile = denodeify(require('fs').readFile);

readFile('my-file.txt', { encoding: 'UTF-8' })
  .then(function(text) {
    console.log("My file's contents is: " + text);
  });

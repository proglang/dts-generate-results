require('es6-promise').polyfill();

var denodeify = require('denodeify');
var exec = denodeify(require('child_process').exec, function(err, stdout, stderr) {
  return [err, [stdout, stderr]];
});

exec('my-command')
  .then(function(results) {
    console.log("stdout is: " + results[0]);
    console.log("stderr is: " + results[1]);
  });

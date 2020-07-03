require('es6-promise').polyfill();

var denodeify = require('denodeify');
var exec = denodeify(require('child_process').exec, function(err, stdout, stderr) {

  // Throw away stderr data
  return [err, stdout];
});

exec('hostname')
  .then(function(host) {
    console.log("My hostname is: " + host.replace('\n', ''));
  });

var cmdShim = require('cmd-shim');
cmdShim(__dirname + '/cli.js', '/usr/bin/command-name', function (err) {
  if (err) throw err;
});

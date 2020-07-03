const argv = require('minimist')(process.argv.slice(2));
MyApp.launch({
  cwd: argv.cwd
}, invoke);

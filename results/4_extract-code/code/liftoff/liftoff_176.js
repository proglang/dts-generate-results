var argv = require('minimist')(process.argv.slice(2));
MyApp.launch({
  preload: argv.preload
}, invoke);

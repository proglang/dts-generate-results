var argv = require('minimist')(process.argv.slice(2));
MyApp.launch({
  configPath: argv.myappfile
}, invoke);

const Liftoff = require('liftoff');
const MyApp = new Liftoff({name:'myapp'});
const argv = require('minimist')(process.argv.slice(2));
const onExecute = function (env, argv) {
  // Do post-execute things
};
const onPrepare = function (env) {
  console.log('my environment is:', env);
  console.log('my liftoff config is:', this);
  MyApp.execute(env, onExecute);
};
MyApp.prepare({
  cwd: argv.cwd,
  configPath: argv.myappfile,
  preload: argv.preload,
  completion: argv.completion
}, onPrepare);

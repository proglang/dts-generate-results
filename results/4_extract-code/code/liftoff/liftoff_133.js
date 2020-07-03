const Liftoff = require('liftoff');
const Hacker = new Liftoff({
  name: 'hacker',
  configFiles: {
    '.hacker': {
      home: { path: '.', cwd: '~' }
    }
  }
});
const onExecute = function (env, argv) {
  // Do post-execute things
};
const onPrepare = function (env) {
   env.configProps = ['home', 'cwd'].map(function(dirname) {
    return env.configFiles['.hacker'][dirname]
  }).filter(function(filePath) {
    return Boolean(filePath);
  }).reduce(function(config, filePath) {
    return mergeDeep(config, require(filePath));
  }, {});

  if (env.configProps.hackerfile) {
    env.configPath = path.resolve(env.configProps.hackerfile);
    env.configBase = path.dirname(env.configPath);
  }

  Hacker.execute(env, onExecute);
};
Hacker.prepare({}, onPrepare);

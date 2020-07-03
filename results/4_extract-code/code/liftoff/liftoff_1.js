const Hacker = new Liftoff({
  name: 'hacker',
  processTitle: 'hacker',
  moduleName: 'hacker',
  configName: 'hackerfile',
  extensions: {
    '.js': null,
    '.json': null,
    '.coffee': 'coffee-script/register'
  },
  v8flags: ['--harmony'] // or v8flags: require('v8flags')
});

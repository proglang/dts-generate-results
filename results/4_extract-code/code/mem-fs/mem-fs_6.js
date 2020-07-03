var File = require('vinyl');
var store = require('mem-fs').create();

var coffeeFile = new File({
  cwd: '/',
  base: '/test/',
  path: '/test/file.coffee',
  contents: new Buffer('test = 123')
});

store.add(coffeeFile);

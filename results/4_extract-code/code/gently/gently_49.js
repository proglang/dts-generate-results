const gently = global.GENTLY = new (require('gently'))
  , myModule = require('./my-module');

gently.expect(gently.hijacked.sys, 'log', function(str) {
  assert.equal(str, 'world');
});

myModule.hello();

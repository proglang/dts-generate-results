const gently = global.GENTLY = new (require('gently'))
  , WorldStub = gently.stub('./world')
  , myModule = require('./my-module')
  , WORLD;

gently.expect(WorldStub, 'new', function() {
  WORLD = this;
});

gently.expect(WORLD, 'hello');

myModule.hello();

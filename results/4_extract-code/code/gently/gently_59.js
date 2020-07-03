if (global.GENTLY) require = GENTLY.hijack(require);

const World = require('./world');

exports.hello = function() {
  const world = new World();
  world.hello();
}

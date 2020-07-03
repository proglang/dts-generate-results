const sys = require('sys');

function World() {

}
module.exports = World;

World.prototype.hello = function() {
  sys.log('world');
};

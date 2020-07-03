var fs = require('fs');
var util = require('util');

var DefaultRegistry = require('undertaker-registry');
var del = require('del');

function CommonRegistry(opts){
  DefaultRegistry.call(this);

  opts = opts || {};

  this.buildDir = opts.buildDir || './build';
}

util.inherits(CommonRegistry, DefaultRegistry);

CommonRegistry.prototype.init = function(takerInst){
  var buildDir = this.buildDir;
  var exists = fs.existsSync(buildDir);

  if(exists){
    throw new Error('Cannot initialize common tasks. ' + buildDir + ' directory exists.');
  }

  takerInst.task('clean', function(){
    return del([buildDir]);
  });
}

module.exports = CommonRegistry;

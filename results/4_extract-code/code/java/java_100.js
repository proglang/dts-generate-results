var java = require('./');
java.classpath.push('.');
var ShutdownHookHelper = java.import('ShutdownHookHelper');

ShutdownHookHelper.setShutdownHookSync(java.newProxy('java.lang.Runnable', {
  run: function () {
    console.log("do shutdown stuff here instead.");
  }
}));

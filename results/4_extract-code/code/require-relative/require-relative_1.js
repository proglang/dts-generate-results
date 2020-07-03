var relative = require('require-relative');

var someModule = relative('./some-module', '/home/kamicane');
var somePackage = relative('some-package', '/home/kamicane');
var isTrue = relative('./some-module.js', process.cwd()) === relative('./some-module.js');

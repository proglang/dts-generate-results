var relative = require('require-relative');

relative.resolve('./some-module', '/home/kamicane'); // /home/kamicane/some-module.js
relative.resolve('some-package', '/home/kamicane'); // /home/kamicane/node_modules/some-package/index.js
var isTrue = relative.resolve('./some-module.js', process.cwd()) === relative.resolve('./some-module.js');

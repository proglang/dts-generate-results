var resolve = require('dir-resolve');

//Assuming the example above is at /path

resolve('module/package'); // -> '/path/node_modules/module/package.json'

resolve('module/test'); // -> '/path/node_modules/module/test'

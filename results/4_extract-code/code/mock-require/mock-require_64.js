var fs = require('fs');
var otherDep = require('./otherDep') // requires fs as a dependency
var fileToTest = require('./fileToTest'); // requires fs and otherDep as a dependency
mock('fs', {}); // fileToTest and otherDep are still using the unmocked fs module

otherDep = mock.reRequire('./otherDep'); // do this to make sure fs is being mocked consistently
fileToTest = mock.reRequire('./fileToTest');

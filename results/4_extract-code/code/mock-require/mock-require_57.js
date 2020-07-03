var fs = require('fs');
var fileToTest = require('./fileToTest');
mock('fs', {}); // fileToTest is still using the unmocked fs module

fileToTest = mock.reRequire('./fileToTest'); // fileToTest is now using your mock

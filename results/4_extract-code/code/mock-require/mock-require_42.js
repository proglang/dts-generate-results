mock('fs', {});
mock('path', {});

var fs1 = require('fs');
var path1 = require('path');

mock.stopAll();

var fs2 = require('fs');
var path2 = require('path');

fs1 === fs2; // false
path1 === path2; // false

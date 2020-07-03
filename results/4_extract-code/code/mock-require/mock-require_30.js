var mock = require('mock-require');
mock('fs', { mockedFS: true });

var fs1 = require('fs');

mock.stop('fs');

var fs2 = require('fs');

fs1 === fs2; // false

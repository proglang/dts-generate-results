var tmp = require('tmp');

var tmpobj = tmp.dirSync({ mode: 0750, prefix: 'myTmpDir_' });
console.log('Dir: ', tmpobj.name);

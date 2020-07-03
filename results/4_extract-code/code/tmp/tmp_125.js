var tmp = require('tmp');

var tmpobj = tmp.dirSync({ template: 'tmp-XXXXXX' });
console.log('Dir: ', tmpobj.name);

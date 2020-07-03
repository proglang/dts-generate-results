var tmp = require('tmp');

tmp.dir({ template: 'tmp-XXXXXX' }, function _tempDirCreated(err, path) {
  if (err) throw err;

  console.log('Dir: ', path);
});

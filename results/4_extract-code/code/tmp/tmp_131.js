var tmp = require('tmp');

var options = {};

tmp.tmpName(options, function _tempNameGenerated(err, path) {
    if (err) throw err;

    console.log('Created temporary filename: ', path);
});

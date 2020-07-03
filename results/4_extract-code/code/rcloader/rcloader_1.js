var RcLoader = require('rcloader');
var map = require('map-stream');

module.exports = function MyGulpPlugin(options) {
  var rcLoader = new RcLoader('.configfilename', options);

  return map(function (file, cb) {
    // get the options for this file specifically
    rcLoader.for(file.path, function (err, fileOpts) {
      // do something cool

      // send the file along
      cb(null, file);
    });
  });
};

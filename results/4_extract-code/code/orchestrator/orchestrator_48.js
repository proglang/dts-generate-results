var map = require('map-stream');

orchestrator.add('thing4', function(){
  var stream = map(function (args, cb) {
    cb(null, args);
  });
  // do stream stuff
  return stream;
});

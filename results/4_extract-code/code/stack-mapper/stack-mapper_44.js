var browserify =  require('browserify')
  , convert    =  require('convert-source-map')

browserify()
  .require(entry)
  .bundle({ debug: true }, function (err, src) {
    if (err) return cb(err);

    var map = convert.fromSource(src).toObject();
  });

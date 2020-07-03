var browserify = require('browserify')
  , path       = require('path')
  , fs         = require('fs')
  , exorcist   = require('exorcist')
  , mapfile    = path.join(__dirname, 'bundle.js.map')

// from a file, to a file, and send source map to its own file
browserify({debug: true})
  .require(require.resolve('./main'), { entry: true })
  .bundle()
  .pipe(exorcist(mapfile))
  .pipe(fs.createWriteStream(path.join(__dirname, 'bundle.js'), 'utf8'))

//  from a stream, to a stream, and send source map to a stream
browserify([readableSourceStream], browserifyOptions)
  .bundle()
  .pipe(exorcist(targetSourceMapStream, '/url/path/to/replace/source/comment/with/bundle.js'))
  .pipe(writableTargetStream)

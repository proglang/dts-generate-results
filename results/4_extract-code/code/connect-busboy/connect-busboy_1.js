var busboy = require('connect-busboy');

// default options, no immediate parsing
app.use(busboy());
// ...
app.use(function(req, res) {
  if (req.busboy) {
    req.busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
      // ...
    });
    req.busboy.on('field', function(key, value, keyTruncated, valueTruncated) {
      // ...
    });
    req.pipe(req.busboy);
  }
  // etc ...
});

// default options, immediately start reading from the request stream and
// parsing
app.use(busboy({ immediate: true }));
// ...
app.use(function(req, res) {
  if (req.busboy) {
    req.busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
      // ...
    });
    req.busboy.on('field', function(key, value, keyTruncated, valueTruncated) {
      // ...
    });
  }
  // etc ...
});

// any valid Busboy options can be passed in also
app.use(busboy({
  highWaterMark: 2 * 1024 * 1024,
  limits: {
    fileSize: 10 * 1024 * 1024
  }
}));


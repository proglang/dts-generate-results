// passing a stream
var readStream = fs.createReadStream('/path/to/my/img.jpg');
gm(readStream, 'img.jpg')
.write('/path/to/reformat.png', function (err) {
  if (!err) console.log('done');
});


// passing a downloadable image by url

var request = require('request');
var url = "www.abc.com/pic.jpg"

gm(request(url))
.write('/path/to/reformat.png', function (err) {
  if (!err) console.log('done');
});


// can also stream output to a ReadableStream
// (can be piped to a local file or remote server)
gm('/path/to/my/img.jpg')
.resize('200', '200')
.stream(function (err, stdout, stderr) {
  var writeStream = fs.createWriteStream('/path/to/my/resized.jpg');
  stdout.pipe(writeStream);
});

// without a callback, .stream() returns a stream
// this is just a convenience wrapper for above.
var writeStream = fs.createWriteStream('/path/to/my/resized.jpg');
gm('/path/to/my/img.jpg')
.resize('200', '200')
.stream()
.pipe(writeStream);

// pass a format or filename to stream() and
// gm will provide image data in that format
gm('/path/to/my/img.jpg')
.stream('png', function (err, stdout, stderr) {
  var writeStream = fs.createWriteStream('/path/to/my/reformatted.png');
  stdout.pipe(writeStream);
});

// or without the callback
var writeStream = fs.createWriteStream('/path/to/my/reformatted.png');
gm('/path/to/my/img.jpg')
.stream('png')
.pipe(writeStream);

// combine the two for true streaming image processing
var readStream = fs.createReadStream('/path/to/my/img.jpg');
gm(readStream)
.resize('200', '200')
.stream(function (err, stdout, stderr) {
  var writeStream = fs.createWriteStream('/path/to/my/resized.jpg');
  stdout.pipe(writeStream);
});

// GOTCHA:
// when working with input streams and any 'identify'
// operation (size, format, etc), you must pass "{bufferStream: true}" if
// you also need to convert (write() or stream()) the image afterwards
// NOTE: this buffers the readStream in memory!
var readStream = fs.createReadStream('/path/to/my/img.jpg');
gm(readStream)
.size({bufferStream: true}, function(err, size) {
  this.resize(size.width / 2, size.height / 2)
  this.write('/path/to/resized.jpg', function (err) {
    if (!err) console.log('done');
  });
});


var zopfli = require('node-zopfli');
var input = new Buffer('I want to be compressed');
zopfli.deflate(input, options, function(err, deflated) {});
zopfli.zlib(input, options, function(err, zlibed) {});
zopfli.gzip(input, options, function(err, gziped) {});

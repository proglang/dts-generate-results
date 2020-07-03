var zopfli = require('node-zopfli');
var input = new Buffer('I want to be compressed');
var deflated = zopfli.deflateSync(input, options);
var zlibed = zopfli.zlibSync(input, options);
var gziped = zopfli.gzipSync(input, options);

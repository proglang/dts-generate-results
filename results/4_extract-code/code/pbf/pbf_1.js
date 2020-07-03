var Pbf = require('pbf');
var Example = require('./example.js').Example;

// read
var pbf = new Pbf(buffer);
var obj = Example.read(pbf);

// write
var pbf = new Pbf();
Example.write(obj, pbf);
var buffer = pbf.finish();

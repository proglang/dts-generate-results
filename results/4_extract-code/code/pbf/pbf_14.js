var compile = require('pbf/compile');
var schema = require('protocol-buffers-schema');

var proto = schema.parse(fs.readFileSync('example.proto'));
var Test = compile(proto).Test;

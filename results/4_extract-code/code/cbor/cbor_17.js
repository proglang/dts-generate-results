var cbor = require('cbor');
var fs = require('fs');

var d = new cbor.Decoder();
d.on('data', function(obj){
  console.log(obj);
});

var s = fs.createReadStream('foo');
s.pipe(d);

var d2 = new cbor.Decoder({input: '00', encoding: 'hex'});
d.on('data', function(obj){
  console.log(obj);
});

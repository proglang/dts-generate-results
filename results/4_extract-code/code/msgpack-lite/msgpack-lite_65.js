var msgpack = require("msgpack-lite");

var codec = msgpack.createCodec();
codec.addExtPacker(0x3F, MyVector, myVectorPacker);
codec.addExtUnpacker(0x3F, myVectorUnpacker);

var data = new MyVector(1, 2);
var encoded = msgpack.encode(data, {codec: codec});
var decoded = msgpack.decode(encoded, {codec: codec});

function MyVector(x, y) {
  this.x = x;
  this.y = y;
}

function myVectorPacker(vector) {
  var array = [vector.x, vector.y];
  return msgpack.encode(array); // return Buffer serialized
}

function myVectorUnpacker(buffer) {
  var array = msgpack.decode(buffer);
  return new MyVector(array[0], array[1]); // return Object deserialized
}

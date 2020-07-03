var msgpack = require("msgpack-lite");
var buffer = msgpack.encode({"foo": "bar"});
var data = msgpack.decode(buffer);
console.warn(data); // => {"foo": "bar"}

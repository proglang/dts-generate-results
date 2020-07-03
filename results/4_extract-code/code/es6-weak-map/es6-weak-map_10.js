var WeakMap = require("es6-weak-map");

var map = new WeakMap();
var obj = {};

map.set(obj, "foo"); // map
map.get(obj); // 'foo'
map.has(obj); // true
map.delete(obj); // true
map.get(obj); // undefined
map.has(obj); // false
map.set(obj, "bar"); // map
map.has(obj); // false

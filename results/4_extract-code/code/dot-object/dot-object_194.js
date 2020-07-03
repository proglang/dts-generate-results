var dot = require('dot-object');

var obj = {
  id: 'my-id',
  nes: { ted: { value: true } },
  other: { nested: { stuff: 5 } },
  some: { array: ['A', 'B'] }
};

var tgt = dot.dot(obj);

// or

var tgt = {};
dot.dot(obj, tgt);

console.log(tgt);

var compareFunc = require('compare-func');

// sort by an object property
[{x: 'b'}, {x: 'a'}, {x: 'c'}].sort(compareFunc('x'));
//=> [{x: 'a'}, {x: 'b'}, {x: 'c'}]

// sort by a nested object property
[{x: {y: 'b'}}, {x: {y: 'a'}}].sort(compareFunc('x.y'));
//=> [{x: {y: 'a'}}, {x: {y: 'b'}}]

// sort by the `x` propery, then `y`
[{x: 'c', y: 'c'}, {x: 'b', y: 'a'}, {x: 'b', y: 'b'}].sort(compareFunc(['x', 'y']));
//=> [{x: 'b', y: 'a'}, {x: 'b', y: 'b'}, {x: 'c', y: 'c'}]

// sort by the returned value
[{x: 'b'}, {x: 'a'}, {x: 'c'}].sort(compareFunc(function(el) {
  return el.x;
}));
//=> [{x: 'a'}, {x: 'b'}, {x: 'c'}]

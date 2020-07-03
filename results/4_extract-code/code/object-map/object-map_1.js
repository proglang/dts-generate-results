var objectMap = require('object-map');

var target = {
  foo: 1,
  bar: 2
};

var result = objectMap(target, function(value) {
  return value * value;
});
// => {foo: 1, bar: 4}

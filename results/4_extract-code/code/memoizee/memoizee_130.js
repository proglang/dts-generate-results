var memoize = require("memoizee/weak");

var memoized = memoize(function(obj) {
	return Object.keys(obj);
});

var obj = { foo: true, bar: false };
memoized(obj);
memoized(obj); // Cache hit

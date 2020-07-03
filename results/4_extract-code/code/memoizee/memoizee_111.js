var d = require("d");
var memoizeMethods = require("memoizee/methods");

var Foo = function() {
	// ... constructor logic
};
Object.defineProperties(
	Foo.prototype,
	memoizeMethods({
		bar: d(
			function() {
				// ... method logic
			},
			{ someOption: true }
		)
	})
);

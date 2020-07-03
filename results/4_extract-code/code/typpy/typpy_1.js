// Dependencies
var Typpy = require("typpy");

console.log(Typpy(0));
// => "number"

console.log(Typpy("", String));
// => true

console.log(Typpy.is(null, "null"));
// => true

console.log(Typpy.get([]));
// => Array

console.log(Typpy({}, true));
// => "object"

console.log(Typpy({}, Object));
// => true

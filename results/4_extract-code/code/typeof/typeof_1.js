var typeOf = require('typeof');

console.log(typeOf("a string"));
// -> "string"

console.log(typeOf([1, 2, 3, "array"]));
// -> "array"

console.log(typeOf(null));
// -> "null"

console.log(typeOf(new Buffer(0)));
// -> "buffer"

function MyClass() {
  this.is = "class constructor"  
}
console.log(typeOf(new MyClass));
// ->"myclass"

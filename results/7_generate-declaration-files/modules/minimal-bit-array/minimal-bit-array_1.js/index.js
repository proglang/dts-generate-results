var BitArray = require("minimal-bit-array")
var x = new BitArray(100)

x.set(5, true)

console.log(x.get(4))     //Prints false
console.log(x.get(5))     //Prints true

var extend = require("xtend")

// extend returns a new object. Does not mutate arguments
var combination = extend({
    a: "a",
    b: "c"
}, {
    b: "b"
})
// { a: "a", b: "b" }

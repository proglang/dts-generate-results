var shallowequal = require("shallowequal");

var object = { user: "fred" };
var other = { user: "fred" };

object == other;
// → false

shallowequal(object, other);
// → true

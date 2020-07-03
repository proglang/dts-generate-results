var pathIsInside = require("path-is-inside");

pathIsInside("/x/y/z", "/x/y") // true
pathIsInside("/x/y", "/x/y/z") // false

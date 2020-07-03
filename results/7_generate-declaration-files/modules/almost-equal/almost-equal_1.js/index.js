var almostEqual = require("almost-equal")

var a = 100
  , b = 100 + 1e-12

//Check if a == b up to float precision
console.log(almostEqual(a, b, almostEqual.FLT_EPSILON, almostEqual.FLT_EPSILON))

//Check if a == b up to double precision
console.log(almostEqual(a, b, almostEqual.DBL_EPSILON, almostEqual.DBL_EPSILON))

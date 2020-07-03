// load math.js
const math = require('mathjs')

// functions and constants
math.round(math.e, 3)             // 2.718
math.atan2(3, -3) / math.pi       // 0.75
math.log(10000, 10)               // 4
math.sqrt(-4)                     // 2i
math.pow([[-1, 2], [3, 1]], 2)    // [[7, 0], [0, 7]]
math.derivative('x^2 + x', 'x')   // 2 * x + 1

// expressions
math.eval('12 / (2.3 + 0.7)')     // 4
math.eval('12.7 cm to inch')      // 5 inch
math.eval('sin(45 deg) ^ 2')      // 0.5
math.eval('9 / 3 + 2i')           // 3 + 2i
math.eval('det([-1, 2  3, 1])')   // -7

// chaining
math.chain(3)
    .add(4)
    .multiply(2)
    .done()  // 14

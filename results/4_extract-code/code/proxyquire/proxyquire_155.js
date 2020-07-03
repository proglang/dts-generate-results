// bar.js module
module.exports = {
    toAtm: function (val) { return  0.986923267 * val; }
};

// foo.js module
// requires bar which we will stub out in tests
var bar = require('./bar');
[ ... ]


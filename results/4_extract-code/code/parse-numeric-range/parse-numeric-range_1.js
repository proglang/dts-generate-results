var rangeParser = require('parse-numeric-range');

var nums = rangeParser.parse('4,6,8-10,12,14..16,18,20...23');

console.log("The first " + nums.length + " composite numbers are: " + nums.join(', '));

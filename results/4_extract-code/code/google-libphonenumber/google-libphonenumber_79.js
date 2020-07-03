// Require `AsYouTypeFormatter`.
const AsYouTypeFormatter = require('google-libphonenumber').AsYouTypeFormatter;
const formatter = new AsYouTypeFormatter('US');

console.log(formatter.inputDigit('2')); // => 2
console.log(formatter.inputDigit('0')); // => 20
console.log(formatter.inputDigit('2')); // => 202
console.log(formatter.inputDigit('-')); // => 202-
console.log(formatter.inputDigit('4')); // => 202-4
console.log(formatter.inputDigit('5')); // => 202-45
console.log(formatter.inputDigit('6')); // => 202-456
console.log(formatter.inputDigit('-')); // => 202-456-
console.log(formatter.inputDigit('1')); // => 202-456-1
console.log(formatter.inputDigit('4')); // => 202-456-14
console.log(formatter.inputDigit('1')); // => 202-456-141
console.log(formatter.inputDigit('4')); // => 202-456-1414

// Cleanup all input digits from instance.
formatter.clear();

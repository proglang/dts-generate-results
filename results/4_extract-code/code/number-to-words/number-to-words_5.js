var converter = require('number-to-words');
converter.toWords(13); // => “thirteen”

// Decimal numbers:
converter.toWords(2.9); // => “two”

// Negative numbers:
converter.toWords(-3); // => “minus three”

// Large numbers:
converter.toWords(9007199254740992); // => “nine quadrillion, seven trillion, one hundred ninety-nine billion, two hundred fifty-four million, seven hundred forty thousand, nine hundred ninety-two”

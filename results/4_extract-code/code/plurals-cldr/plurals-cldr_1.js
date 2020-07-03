var plural = require('plural-cldr');

// Get cardinal form name
//
// Params:
//
// - locale
// - number (Number|String)
//
plural('ru', 0)   // -> 'many'
plural('ru', 1)   // -> 'one'
plural('ru', 2)   // -> 'few'
plural('ru', 19)  // -> 'many'
plural('ru', 0.5) // -> 'other'

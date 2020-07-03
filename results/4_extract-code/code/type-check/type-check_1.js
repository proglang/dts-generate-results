// Basic types:
var typeCheck = require('type-check').typeCheck;
typeCheck('Number', 1);               // true
typeCheck('Number', 'str');           // false
typeCheck('Error', new Error);        // true
typeCheck('Undefined', undefined);    // true

// Comment
typeCheck('count::Number', 1);        // true

// One type OR another type:
typeCheck('Number | String', 2);      // true
typeCheck('Number | String', 'str');  // true

// Wildcard, matches all types:
typeCheck('*', 2) // true

// Array, all elements of a single type:
typeCheck('[Number]', [1, 2, 3]);                // true
typeCheck('[Number]', [1, 'str', 3]);            // false

// Tuples, or fixed length arrays with elements of different types:
typeCheck('(String, Number)', ['str', 2]);       // true
typeCheck('(String, Number)', ['str']);          // false
typeCheck('(String, Number)', ['str', 2, 5]);    // false

// Object properties:
typeCheck('{x: Number, y: Boolean}', {x: 2, y: false});             // true
typeCheck('{x: Number, y: Boolean}',       {x: 2});                 // false
typeCheck('{x: Number, y: Maybe Boolean}', {x: 2});                 // true
typeCheck('{x: Number, y: Boolean}',      {x: 2, y: false, z: 3});  // false
typeCheck('{x: Number, y: Boolean, ...}', {x: 2, y: false, z: 3});  // true

// A particular type AND object properties:
typeCheck('RegExp{source: String, ...}', /re/i);          // true
typeCheck('RegExp{source: String, ...}', {source: 're'}); // false

// Custom types:
var opt = {customTypes:
  {Even: { typeOf: 'Number', validate: function(x) { return x % 2 === 0; }}}};
typeCheck('Even', 2, opt); // true

// Nested:
var type = '{a: (String, [Number], {y: Array, ...}), b: Error{message: String, ...}}'
typeCheck(type, {a: ['hi', [1, 2, 3], {y: [1, 'ms']}], b: new Error('oh no')}); // true

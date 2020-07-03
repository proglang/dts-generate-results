var bases = require('./bases');
  // or window.Bases in the browser

bases.toBase16(200);                // => 'c8'
bases.toBase62(99999);              // => 'q0T'
bases.toAlphabet(300, 'aAbBcC');    // => 'Abba'

bases.fromBase16('c8');               // => 200
bases.fromBase62('q0T');              // => 99999
bases.fromAlphabet('Abba', 'aAbBcC'); // => 300

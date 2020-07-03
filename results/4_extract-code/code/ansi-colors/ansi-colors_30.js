const c = require('ansi-colors');

// disable colors manually
c.enabled = false;

// or use a library to automatically detect support
c.enabled = require('color-support').hasBasic;

console.log(c.red('I will only be colored red if the terminal supports colors'));

const gradient = require('gradient-string');

// Use the same gradient on every line
let duck = gradient('orange', 'yellow').multiline([
    "  __",
    "<(o )___",
    " ( ._> /",
    "  `---'",
].join('\n'));
console.log(duck);

// Works with aliases
gradient.atlas.multiline('Multi line\nstring');

// Works with advanced options
gradient('cyan', 'pink').multiline('Multi line\nstring', {interpolation: 'hsv'});

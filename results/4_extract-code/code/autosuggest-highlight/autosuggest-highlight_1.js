var match = require('autosuggest-highlight/match');

// text indices:     012345678
// highlighting:          vv
var matches = match('some text', 'te'); // [[5, 7]]

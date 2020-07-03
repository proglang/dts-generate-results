var parse = require('autosuggest-highlight/parse');

// text indices:   0123456789012345
// highlighting:          vv   v
var parts = parse('Pretty cool text', [[7, 9], [12, 13]]);
/*
  [
    {
      text: 'Pretty ',
      highlight: false
    },
    {
      text: 'co',
      highlight: true
    },
    {
      text: 'ol ',
      highlight: false
    },
    {
      text: 't',
      highlight: true
    },
    {
      text: 'ext',
      highlight: false
    }
  ]
*/

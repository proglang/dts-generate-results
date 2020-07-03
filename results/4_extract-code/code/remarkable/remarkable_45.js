var Remarkable = require('remarkable');
var md = new Remarkable('full');

// Or with options:
var md = new Remarkable('full', {
  html: true,
  linkify: true,
  typographer: true
});

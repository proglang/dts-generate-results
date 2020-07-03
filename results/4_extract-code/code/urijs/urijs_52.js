// load URI.js
var URI = require('urijs');
// load an optional module (e.g. URITemplate)
var URITemplate = require('urijs/src/URITemplate');

URI("/foo/bar/baz.html")
  .relativeTo("/foo/bar/sub/world.html")
    // -> ../baz.html

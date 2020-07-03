var stackMapper = require('stack-mapper');

// it is up to you to create stack-mapper compatible frame objects
// this will depend on your environment
var inframes = [{
  filename: '/full/path/to/bundle.js',
  line: 5,
  column: 10
}, {
  filename: '/full/path/to/bundle.js',
  line: 9,
  column: 10
}, {
  filename: '/full/path/to/bundle.js',
  line: 20,
  column: 12
}, {
  filename: '/full/path/to/bundle.js',
  line: 22,
  column: 10,
}, {
  filename: '/Users/thlorenz/dev/js/projects/stack-mapper/test/twofiles.js',
  line: 18,
  column: 21
}];

var map = { version: 3,
  file: 'generated.js',
  sources:
   [ '/Users/thlorenz/dev/js/projects/stack-mapper/test/twofiles/barbar.js',
     '/Users/thlorenz/dev/js/projects/stack-mapper/test/twofiles/main.js' ],
  names: [],
  mappings: ';AAAA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;;ACTA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA',
  sourcesContent:
   [ '\'use strict\';\n\nfunction foobar() {\n  return new Error();\n}\n\nvar go = module.exports = function () {\n  return foobar();  \n};\n',
     '\'use strict\';\n\nvar barbar = require(\'./barbar\');\n\nmodule.exports = function main() {\n  var a = 1;\n  function bar() {\n    return barbar();\n  }\n  return bar();\n}\n' ] }

var sm = stackMapper(map);
var frames = sm.map(inframes);

console.log(frames);

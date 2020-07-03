var hook = require('css-modules-require-hook');
var cssnext = require('cssnext');

hook({
  prepend: [
    // adding CSS Next plugin
    cssnext(),
  ],
});

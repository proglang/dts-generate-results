var handlebars = require('handlebars');
var helpers = require('handlebars-helpers')({
  handlebars: handlebars
});

// or for a specific collection
var math = helpers.math({
  handlebars: handlebars
});

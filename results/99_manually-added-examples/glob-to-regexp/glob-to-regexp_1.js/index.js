var globToRegExp = require("glob-to-regexp");
var re = globToRegExp("p*uck");
re.test("pot luck"); // true
re.test("pluck"); // true
re.test("puck"); // true

re = globToRegExp("*.min.js");
re.test("http://example.com/jquery.min.js"); // true
re.test("http://example.com/jquery.min.js.map"); // false

re = globToRegExp("*/www/*.js");
re.test("http://example.com/www/app.js"); // true
re.test("http://example.com/www/lib/factory-proxy-model-observer.js"); // true

// Manually added
re = globToRegExp("*/www/*.js", {});
re = globToRegExp("*/www/{*.js,*.html}", {
  extended: true,
  flags: "i",
  globstar: true,
});
re.test("http://example.com/www/app.js"); // true
re.test("http://example.com/www/index.html"); // true

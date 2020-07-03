var fs = require("fs");
var browserify = require("browserify");
browserify("./script.js")
  .transform("babelify", {presets: ["@babel/preset-env", "@babel/preset-react"]})
  .bundle()
  .pipe(fs.createWriteStream("bundle.js"));

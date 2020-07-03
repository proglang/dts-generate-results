var babelify = require("babelify");
browserify().transform(babelify, {presets: ["@babel/preset-env", "@babel/preset-react"]});

var recursive = require("recursive-readdir");

// ignore files named "foo.cs" or files that end in ".html".
recursive("some/path", ["foo.cs", "*.html"], function (err, files) {
  console.log(files);
});

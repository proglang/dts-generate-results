var recursive = require("recursive-readdir");

function ignoreFunc(file, stats) {
  // `file` is the path to the file, and `stats` is an `fs.Stats`
  // object returned from `fs.lstat()`.
  return stats.isDirectory() && path.basename(file) == "test";
}

// Ignore files named "foo.cs" and descendants of directories named test
recursive("some/path", ["foo.cs", ignoreFunc], function (err, files) {
  console.log(files);
});

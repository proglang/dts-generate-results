var recursive = require("recursive-readdir");

recursive("some/path", function (err, files) {
  // `files` is an array of file paths
  console.log(files);
});

var readdir = require('readdir-enhanced');

// Only crawl the "lib" and "bin" subdirectories
// (notice that the "node_modules" subdirectory does NOT get crawled)
readdir('my/directory', {deep: /lib|bin/}, function(err, files) {
  console.log(files);
  // => bin
  // => bin/cli.js
  // => lib
  // => lib/index.js
  // => node_modules
  // => package.json
});

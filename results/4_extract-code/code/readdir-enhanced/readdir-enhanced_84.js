var readdir = require('readdir-enhanced');

// Crawl all subdirectories, except "node_modules"
function ignoreNodeModules (stats) {
  return stats.path.indexOf('node_modules') === -1;
}

readdir('my/directory', {deep: ignoreNodeModules}, function(err, files) {
  console.log(files);
  // => bin
  // => bin/cli.js
  // => lib
  // => lib/index.js
  // => node_modules
  // => package.json
});

const cosmiconfig = require('cosmiconfig');
// ...
const explorer = cosmiconfig(moduleName);

// Search for a configuration by walking up directories.
// See documentation for search, below.
explorer.search()
  .then((result) => {
    // result.config is the parsed configuration object.
    // result.filepath is the path to the config file that was found.
    // result.isEmpty is true if there was nothing to parse in the config file.
  })
  .catch((error) => {
    // Do something constructive.
  });

// Load a configuration directly when you know where it should be.
// The result object is the same as for search.
// See documentation for load, below.
explorer.load(pathToConfig).then(..);

// You can also search and load synchronously.
const searchedFor = explorer.searchSync();
const loaded = explorer.loadSync(pathToConfig);

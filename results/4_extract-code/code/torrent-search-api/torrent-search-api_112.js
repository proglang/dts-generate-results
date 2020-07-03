
// load multipe providers
// from a TorrentProvider custom class definition or instance
const MyCustomProvider = require('./MyCustomProvider');
TorrentSearchApi.loadProvider(MyCustomProvider);

// from a provider object definition
TorrentSearchApi.loadProvider( {/* provider object definition */});

// from an absolute path to class definition or json object definition
const path = require('path');
const providerFullPath = path.join(__dirname, './lib/providers/MyCustomProvider');
TorrentSearchApi.loadProviders(providerFullPath);

// load multipe providers within a directory
// only absolute path are allowed
// it loads every *.json and *.js file
const path = require('path');
const providerDirFullPath = path.join(__dirname, './lib/providers/');
TorrentSearchApi.loadProviders(providerDirFullPath);

// load multipe providers
const MyCustomProvider = require('./MyCustomProvider');
TorrentSearchApi.loadProviders(MyCustomProvider, {/* provider object definition */}, ...);


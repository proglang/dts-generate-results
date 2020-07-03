const storage = require('electron-json-storage');

storage.has('foobar', function(error, hasKey) {
  if (error) throw error;

  if (hasKey) {
    console.log('There is data stored as `foobar`');
  }
});

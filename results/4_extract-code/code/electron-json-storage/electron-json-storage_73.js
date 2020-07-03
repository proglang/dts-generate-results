const storage = require('electron-json-storage');

storage.remove('foobar', function(error) {
  if (error) throw error;
});

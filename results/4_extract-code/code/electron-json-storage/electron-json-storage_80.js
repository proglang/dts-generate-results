const storage = require('electron-json-storage');

storage.clear(function(error) {
  if (error) throw error;
});

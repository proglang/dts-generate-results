const storage = require('electron-json-storage');

storage.getAll(function(error, data) {
  if (error) throw error;

  console.log(data);
});

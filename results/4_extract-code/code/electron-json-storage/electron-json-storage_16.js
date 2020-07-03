const storage = require('electron-json-storage');

storage.get('foobar', function(error, data) {
  if (error) throw error;

  console.log(data);
});

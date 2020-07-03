const storage = require('electron-json-storage');

storage.getMany([ 'foobar', 'barbaz' ], function(error, data) {
  if (error) throw error;

  console.log(data.foobar);
  console.log(data.barbaz);
});

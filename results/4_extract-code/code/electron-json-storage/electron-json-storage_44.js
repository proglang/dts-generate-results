const storage = require('electron-json-storage');

storage.set('foobar', { foo: 'bar' }, function(error) {
  if (error) throw error;
});

var chmodr = require('chmodr');

chmodr('/var/www/my/test/folder', 0o777, (err) => {
  if (err) {
    console.log('Failed to execute chmod', err);
  } else {
    console.log('Success');
  }
});

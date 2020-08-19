var emptyDir = require('empty-dir');

// Using an error-back
emptyDir('./', function(err, result) {
  if (err) {
    console.error(err);
  } else {
    console.log('Directory is empty:', result);
  }
});

// Using a Promise
emptyDir('./').then(function(result) {
  console.log('Directory is empty:', result);
});

var result = emptyDir.sync('./test/empty');
console.log('Directory is empty:', result);

var emptyDir = require('empty-dir');

function filter(filepath) {
  return !/(Thumbs\.db|\.DS_Store)$/i.test(filepath);
}

emptyDir('./', filter, function(err, isEmpty) {
  if (err) {
    console.error(err);
  } else {
    console.log('Directory is empty:', isEmpty);
  }
});

var isEmpty = emptyDir.sync('./test/empty', filter);
console.log('Directory is empty:', isEmpty);

var fs = require('mz/fs')

fs.exists(__filename).then(function (exists) {
  if (exists) // do something
})

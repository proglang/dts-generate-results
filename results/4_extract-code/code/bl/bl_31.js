const bl = require('bl')
    , fs = require('fs')

fs.createReadStream('README.md')
  .pipe(bl(function (err, data) { // note 'new' isn't strictly required
    // `data` is a complete Buffer object containing the full data
    console.log(data.toString())
  }))

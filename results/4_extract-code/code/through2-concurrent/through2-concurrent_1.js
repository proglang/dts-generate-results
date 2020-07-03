var through2Concurrent = require('through2-concurrent');

var all = [];

fs.createReadStream('data.csv')
  .pipe(csv2())
  .pipe(through2Concurrent.obj(
    {maxConcurrency: 10},
    function (chunk, enc, callback) {
      var self = this;
      someThingAsync(chunk, function (newChunk) {
        self.push(newChunk);
        callback();
      });
  }))
  .on('data', function (data) {
    all.push(data)
  })
  .on('end', function () {
    doSomethingSpecial(all)
  })

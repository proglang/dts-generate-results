var audiosprite = require('audiosprite')

var files = ['file1.mp3', 'file2.mp3']
var opts = {output: 'result'}

audiosprite(files, opts, function(err, obj) {
  if (err) return console.error(err)

  console.log(JSON.stringify(obj, null, 2))
})

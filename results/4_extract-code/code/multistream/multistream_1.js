var MultiStream = require('multistream')
var fs = require('fs')

var streams = [
  fs.createReadStream(__dirname + '/numbers/1.txt'),
  fs.createReadStream(__dirname + '/numbers/2.txt'),
  fs.createReadStream(__dirname + '/numbers/3.txt')
]

new MultiStream(streams).pipe(process.stdout) // => 123

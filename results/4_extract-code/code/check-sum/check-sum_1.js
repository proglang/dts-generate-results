var checksum = require('check-sum')
var stream = require('fs').createReadStream('package.json')

checksum(stream, {
  md5: 'asdfasdfasdf',
  sha1: 'asdfasdfasdf'
}, function (err) {
  if (err) throw err // will throw on any failed check sums
})

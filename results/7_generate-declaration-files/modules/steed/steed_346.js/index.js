var steed = require('steed')()
// or
// var steed = require('steed')

var queue = steed.queue(worker, 1)

queue.push(42, function (err, result) {
  if (err) { throw err }
  console.log('the result is', result)
})

function worker (arg, cb) {
  cb(null, arg * 2)
}

var steed = require('steed')()
// or
// var steed = require('steed')

var input = [1, 2, 3]
var factor = 2

steed.map(input, function (num, cb) {
  setImmediate(cb, null, num * factor)
}, function (err, results) {
  if (err) { throw err }

  console.log(results.reduce(sum))
})

function sum (acc, num) {
  return acc + num
}

// preferred version for max speed
function run (factor, args, cb) {
  steed.map(new State(factor, cb), args, work, done)
}

// can be optimizied by V8 using an hidden class
function State (factor, cb) {
  this.factor = factor
  this.cb = cb
}

// because it is not a closure inside run()
// v8 can optimize this function
function work (num, cb) {
  setImmediate(cb, null, num * this.factor)
}

function done (err, results) {
  results = results || []
  this.cb(err, results.reduce(sum))
}

run(2, [1, 2, 3], console.log)

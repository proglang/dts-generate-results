var steed = require('steed')()
// or
// var steed = require('steed')

var input = [1, 2, 3]
var factor = 2

steed.each(input, function (num, cb) {
  console.log(num * factor)
  setImmediate(cb)
}, function () {
  console.log('done')
})

// preferred version for max speed
function run (factor, args, cb) {
  steed.each(new State(factor), work, cb)
}

// can be optimizied by V8 using an hidden class
function State (factor) {
  this.factor = factor
}

// because it is not a closure inside run()
// v8 can optimize this function
function work (num, cb) {
  console.log(num * this.factor)
  cb()
}

run(factor, input, console.log)

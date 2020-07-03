var steed = require('steed')()
// or
// var steed = require('steed')

steed.waterfall([
  function a (cb) {
    console.log('called a')
    cb(null, 'a')
  },
  function b (a, cb) {
    console.log('called b with:', a)
    cb(null, 'a', 'b')
  },
  function c (a, b, cb) {
    console.log('called c with:', a, b)
    cb(null, 'a', 'b', 'c')
  }], function result (err, a, b, c) {
    console.log('result arguments', arguments)
  })

// preferred version for maximum speed
function run (word, cb) {
  steed.waterfall(new State(cb), [
    aT, bT, cT,
  ], cb)
}

// can be optimized by V8 using an hidden class
function State (value) {
  this.value = value
}

// because it is not a closure inside run()
// v8 can optimize this function
function aT (cb) {
  console.log(this.value)
  console.log('called a')
  cb(null, 'a')
}

// because it is not a closure inside run()
// v8 can optimize this function
function bT (a, cb) {
  console.log('called b with:', a)
  cb(null, 'a', 'b')
}

// because it is not a closure inside run()
// v8 can optimize this function
function cT (a, b, cb) {
  console.log('called c with:', a, b)
  cb(null, 'a', 'b', 'c')
}

var steed = require('steed')()
// or
// var steed = require('steed')

steed.series([
  function a (cb){
    cb(null, 'a');
  },
  function b (cb){
    cb(null, 'b');
  }
], function(err, results){
  // results is ['a', 'b']
})


// an example using an object instead of an array
steed.series({
  a: function a (cb){
    cb(null, 1)
  },
  b: function b (cb){
    cb(null, 2)
  }
}, function(err, results) {
  // results is  { a: 1, b: 2}
})

// an example using that parameter
// preferred form for max speed
function run (prefix, a, b, cb) {
  steed.series(new State(prefix, a, b, cb), [aT, bT], doneT)
}

// can be optimized by V8 using an hidden class
function State (prefix, a, b, cb) {
  this.a = a
  this.b = b
  this.cb = cb
  this.prefix = prefix
}

// because it is not a closure inside run()
// v8 can optimize this function
function aT (cb){
  cb(null, this.a);
}

// because it is not a closure inside run()
// v8 can optimize this function
function bT (cb){
  cb(null, this.b);
}

// because it is not a closure inside run()
// v8 can optimize this function
function doneT (err, results) {
  if (results) {
    results.unshift(this.prefix)
    results = results.join(' ')
  }
  this.cb(err, results)
}

run('my name is', 'matteo', 'collina', console.log)

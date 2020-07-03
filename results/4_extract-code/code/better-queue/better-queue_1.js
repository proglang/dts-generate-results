var Queue = require('better-queue');

var q = new Queue(function (input, cb) {
  
  // Some processing here ...

  cb(null, result);
})

q.push(1)
q.push({ x: 1 })

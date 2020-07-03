var parallelLimit = require('run-parallel-limit')

var tasks = [
  function (callback) {
    setTimeout(function () {
      callback(null, 'one')
    }, 200)
  },
  function (callback) {
    setTimeout(function () {
      callback(null, 'two')
    }, 100)
  },
  ... hundreds more tasks ...
]

parallelLimit(tasks, 5, function (err, results) {
  // optional callback
  // the results array will equal ['one', 'two', ...] even though
  // the second function had a shorter timeout.
})

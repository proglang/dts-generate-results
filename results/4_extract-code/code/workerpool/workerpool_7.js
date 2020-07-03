var workerpool = require('workerpool');
var pool = workerpool.pool();

function add(a, b) {
  return a + b;
}

pool.exec(add, [3, 4])
    .then(function (result) {
      console.log('result', result); // outputs 7
    })
    .catch(function (err) {
      console.error(err);
    })
    .then(function () {
      pool.terminate(); // terminate all workers when done
    });

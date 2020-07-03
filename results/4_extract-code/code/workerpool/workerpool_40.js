var workerpool = require('workerpool');

// create a worker pool using an external worker script
var pool = workerpool.pool(__dirname + '/myWorker.js');

// run registered functions on the worker via exec
pool.exec('fibonacci', [10])
    .then(function (result) {
      console.log('Result: ' + result); // outputs 55
    })
    .catch(function (err) {
      console.error(err);
    })
    .then(function () {
      pool.terminate(); // terminate all workers when done
    });

// or run registered functions on the worker via a proxy:
pool.proxy()
    .then(function (worker) {
      return worker.fibonacci(10);
    })
    .then(function (result) {
      console.log('Result: ' + result); // outputs 55
    })
    .catch(function (err) {
      console.error(err);
    })
    .then(function () {
      pool.terminate(); // terminate all workers when done
    });

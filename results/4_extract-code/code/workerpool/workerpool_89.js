var workerpool = require('workerpool');

function add(a, b) {
  return a + b;
}

var pool1 = workerpool.pool();

// offload a function to a worker
pool1.exec(add, [2, 4])
    .then(function (result) {
      console.log(result); // will output 6
    })
    .catch(function (err) {
      console.error(err);
    });

// create a dedicated worker
var pool2 = workerpool.pool(__dirname + '/myWorker.js');

// supposed myWorker.js contains a function 'fibonacci'
pool2.exec('fibonacci', [10])
    .then(function (result) {
      console.log(result); // will output 55
    })
    .catch(function (err) {
      console.error(err);
    });

// create a proxy to myWorker.js
pool2.proxy()
    .then(function (myWorker) {
      return myWorker.fibonacci(10)
    })
    .then(function (result) {
      console.log(result); // will output 55
    })
    .catch(function (err) {
      console.error(err);
    });

// create a pool with a specified maximum number of workers
var pool3 = workerpool.pool({maxWorkers: 7});

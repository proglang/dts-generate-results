// file myWorker.js
var workerpool = require('workerpool');

function timeout(delay) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, delay)
  });
}

// create a worker and register functions
workerpool.worker({
  timeout: timeout
});

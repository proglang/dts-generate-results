// file myWorker.js
var workerpool = require('workerpool');

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

// create a worker and register functions
workerpool.worker({
  add: add,
  multiply: multiply
});

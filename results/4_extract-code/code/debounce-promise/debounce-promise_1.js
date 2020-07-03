
var debounce = require('debounce-promise')

function expensiveOperation(value) {
  return Promise.resolve(value)
}

var saveCycles = debounce(expensiveOperation, 100);

[1, 2, 3, 4].forEach(num => {
  return saveCycles('call no #' + num).then(value => {
    console.log(value)
  })
})

// Will only call expensiveOperation once with argument `4` and print:
//=> call no #4
//=> call no #4
//=> call no #4
//=> call no #4

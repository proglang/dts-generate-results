var debounce = require('debounce-promise')

function expensiveOperation(value) {
  return Promise.resolve(value)
}

var saveCycles = debounce(expensiveOperation, 100, {leading: true});

[1, 2, 3, 4].forEach(num => {
  return saveCycles('call no #' + num).then(value => {
    console.log(value)
  })
})

//=> call no #1
//=> call no #4
//=> call no #4
//=> call no #4

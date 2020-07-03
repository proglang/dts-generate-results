var debounce = require('debounce-promise')

function squareValues (argTuples) {
  return Promise.all(argTuples.map(args => args[0] * args[0]))
}

var square = debounce(squareValues, 100, {accumulate: true});

[1, 2, 3, 4].forEach(num => {
  return square(num).then(value => {
    console.log(value)
  })
})

//=> 1
//=> 4
//=> 9
//=> 16

const isTrademarked = require('is-trademarked')

// not trademarked yet
isTrademarked('unicorns')
  .then(trademarked => {
    console.log(trademarked) //=> false
  })

// trademarked
// return an array which contains a single item
isTrademarked('apple')
  .then(trademarks => {
    if (trademarks) {
      trademarks.forEach(t => console.log(t.wordmark))
    }
  })

// wildcard
// return an array which contains multiple items
// it searches `macbook` `macbook air` etc...
isTrademarked('mac*')
  .then(/* your code */)

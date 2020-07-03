const format = require('nanoid/format')

function random (size) {
  const result = []
  for (let i = 0; i < size; i++) {
    result.push(randomByte())
  }
  return result
}

format(random, "abcdef", 10) //=> "fbaefaadeb"

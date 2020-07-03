const format = require('nanoid/async/format')
const url = require('nanoid/url')

function random (size) {
  return new Promise(…)
}

async function createUser () {
  user.id = await format(random, url, 10)
}

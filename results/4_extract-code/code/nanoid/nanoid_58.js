const generate = require('nanoid/async/generate')
async function createUser () {
  user.id = await generate('1234567890abcdef', 10)
}

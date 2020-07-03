const nanoid = require('nanoid/async')

async function createUser () {
  user.id = await nanoid()
}

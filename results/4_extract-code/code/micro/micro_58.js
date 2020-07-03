const micro = require('micro')
const sleep = require('then-sleep')

const server = micro(async (req, res) => {
  await sleep(500)
  return 'Hello world'
})

server.listen(3000)

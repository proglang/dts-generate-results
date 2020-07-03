const sleep = require('then-sleep')

module.exports = async (req, res) => {
  await sleep(500)
  return 'Ready!'
}

const {send} = require('micro')

module.exports = async (req, res) => {
  const statusCode = 400
  const data = { error: 'Custom error message' }

  send(res, statusCode, data)
}

const { send } = require('micro')
const cors = require('micro-cors')()

const handler = (req, res) => send(res, 200, 'ok!')

module.exports = cors(handler)

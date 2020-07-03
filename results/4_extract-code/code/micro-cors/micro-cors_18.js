const { send } = require('micro')
const cors = require('micro-cors')()

const handler = (req, res) => {
  if (req.method === 'OPTIONS') {
    return send(res, 200, 'ok!');
  }

  if (req.method !== 'POST') {
    throw createError(404, 'Not Found');
  }

  // handle incoming request as usual
}

module.exports = cors(handler)

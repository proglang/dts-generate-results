const rateLimit = require('my-rate-limit')

module.exports = async (req, res) => {
  await rateLimit(req)
  // ... your code
}

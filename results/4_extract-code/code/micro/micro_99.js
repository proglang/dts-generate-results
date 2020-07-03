const {send} = require('micro')

const handleErrors = fn => async (req, res) => {
  try {
    return await fn(req, res)
  } catch (err) {
    console.log(err.stack)
    send(res, 500, 'My custom error!')
  }
}

module.exports = handleErrors(async (req, res) => {
  throw new Error('What happened here?')
})

const {buffer, text, json} = require('micro')

module.exports = async (req, res) => {
  const buf = await buffer(req)
  console.log(buf)
  // <Buffer 7b 22 70 72 69 63 65 22 3a 20 39 2e 39 39 7d>
  const txt = await text(req)
  console.log(txt)
  // '{"price": 9.99}'
  const js = await json(req)
  console.log(js.price)
  // 9.99
  return ''
}

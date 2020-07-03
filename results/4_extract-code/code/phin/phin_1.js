const p = require('phin')

const res = await p('https://ethanent.me')

console.log(res.body)

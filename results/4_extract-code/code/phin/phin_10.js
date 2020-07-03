const p = require('phin').unpromisified

p('https://ethanent.me', (err, res) => {
	if (!err) console.log(res.body)
})

const uslug = require('uslug')
const uslugify = s => uslug(s)

const md = require('markdown-it')()
const anchor = require('markdown-it-anchor', {
	slugify: uslugify
})

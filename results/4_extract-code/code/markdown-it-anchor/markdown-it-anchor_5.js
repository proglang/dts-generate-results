const string = require('string')
const legacySlugify = s => string(s).slugify().toString()

const md = require('markdown-it')()
const anchor = require('markdown-it-anchor', {
	slugify: legacySlugify
})

jsStringEscape = require('js-string-escape')

console.log('"' + jsStringEscape('Quotes (\", \'), newlines (\n), etc.') + '"')
// => "Quotes (\", \'), newlines (\n), etc."

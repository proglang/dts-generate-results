var escapeHtml = require('escape-html')

// example values
var desc = 'I <b>think</b> this is good.'
var fullName = 'John "Johnny" Smith'

// example passing in text into a html attribute
console.dir('<input name="full_name" value="' + escapeHtml(fullName) + '">')
// -> '<input name="full_name" value="John &quot;Johnny&quot; Smith">'

// example passing in text in html body
console.dir('<textarea name="desc">' + escapeHtml(desc) + '</textarea>')
// -> '<textarea name="desc">I &lt;b&gt;think&lt;/b&gt; this is good.</textarea>'

var markdownpdf = require("markdown-pdf")

var options = {
    remarkable: {
        html: true,
        breaks: true,
        plugins: [ require('remarkable-classy') ],
		syntax: [ 'footnote', 'sup', 'sub' ]
    }
}

markdownpdf(options)
  .from("/path/to/document.md")
  .to("/path/to/document.pdf", function () { console.log("Done") })

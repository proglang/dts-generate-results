var markdownpdf = require("markdown-pdf")

var md = "foo===\n* bar\n* baz\n\nLorem ipsum dolor sit"
  , outputPath = "/path/to/doc.pdf"

markdownpdf().from.string(md).to(outputPath, function () {
  console.log("Created", outputPath)
})

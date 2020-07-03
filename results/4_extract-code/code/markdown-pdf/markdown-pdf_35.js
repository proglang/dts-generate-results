var markdownpdf = require("markdown-pdf")

var mdDocs = ["chapter1.md", "chapter2.md", "chapter3.md"]
  , bookPath = "/path/to/book.pdf"

markdownpdf().concat.from(mdDocs).to(bookPath, function () {
  console.log("Created", bookPath)
})

var markdownpdf = require("markdown-pdf")

var mdDocs = ["home.md", "about.md", "contact.md"]
  , pdfDocs = mdDocs.map(function (d) { return "out/" + d.replace(".md", ".pdf") })

markdownpdf().from(mdDocs).to(pdfDocs, function () {
  pdfDocs.forEach(function (d) { console.log("Created", d) })
})

var markdownpdf = require("markdown-pdf")
  , split = require("split")
  , through = require("through")
  , duplexer = require("duplexer")

function preProcessMd () {
  // Split the input stream by lines
  var splitter = split()

  // Replace occurences of "foo" with "bar"
  var replacer = through(function (data) {
    this.queue(data.replace(/foo/g, "bar") + "\n")
  })

  splitter.pipe(replacer)
  return duplexer(splitter, replacer)
}

markdownpdf({preProcessMd: preProcessMd})
  .from("/path/to/document.md")
  .to("/path/to/document.pdf", function () { console.log("Done") })

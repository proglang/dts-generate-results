const jsreport = require('jsreport-core')()
jsreport.use(require('jsreport-html-embedded-in-docx')())

await jsreport.init()
const response = await jsreport.render({
  template: {
    content: "<h1>Hello</h1>",
    recipe: "html-embedded-in-docx",
    engine: "none"
  }
})

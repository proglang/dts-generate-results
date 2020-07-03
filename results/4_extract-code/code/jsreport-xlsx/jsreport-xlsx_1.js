var fs = require('fs')
var jsreport = require('jsreport-core')()
jsreport.use(require('jsreport-xlsx')())
jsreport.use(require('jsreport-handlebars')())

jsreport.init().then(function () {
  return jsreport.render({
    template: {
      recipe: 'xlsx',
      engine: 'handlebars',
      content: '{{{xlsxPrint}}}',
      xlsxTemplate: {
        content: fs.readFileSync('Book1.xlsx').toString('base64')
      }
    }
  }).then(function (report) {
    report.stream.pipe(fs.createWriteStream('out.xlsx'))
  })
})

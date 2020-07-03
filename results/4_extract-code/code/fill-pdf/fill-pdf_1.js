const fillPdf = require("fill-pdf");
const formData = { FieldName: 'Text to put into form field' };
const pdfTemplatePath = "templates.pdf";

app.get('/filled_form.pdf', (req, res) => {
  fillPdf.generatePdf(formData, pdfTemplatePath, function(err, output) {
    if ( !err ) {
      res.type("application/pdf");
      res.send(output);
    }
  });
});

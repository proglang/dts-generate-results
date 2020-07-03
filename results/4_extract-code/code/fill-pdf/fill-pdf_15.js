const fillPdf = require('fill-pdf');

const extraArgs = ['flatten'];
fillPdf.generatePdf(formData, pdfTemplatePath, extraArgs, (err, output) => {
  // ...
});

const HummusRecipe = require('hummus-recipe');
const pdfDoc = new HummusRecipe('new', '/output.pdf',{
    version: 1.6,
    author: 'John Doe',
    title: 'Hummus Recipe',
    subject: 'A brand new PDF'
});

pdfDoc
    .createPage('letter-size')
    .endPage()
    .endPDF();

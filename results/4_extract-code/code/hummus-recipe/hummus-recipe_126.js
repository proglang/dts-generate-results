const HummusRecipe = require('hummus-recipe');
const pdfDoc = new HummusRecipe('input.pdf', 'output.pdf');

pdfDoc
    // insert page3 from longPDF to current page 2
    .insertPage(2, '/longPDF.pdf', 3)
    .endPDF();

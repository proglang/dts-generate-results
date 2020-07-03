const HummusRecipe = require('hummus-recipe');
const pdfDoc = new HummusRecipe('input.pdf', 'output.pdf');

pdfDoc
    .overlay('/overlayPDF.pdf')
    .endPDF();

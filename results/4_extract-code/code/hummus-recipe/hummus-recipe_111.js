const HummusRecipe = require('hummus-recipe');
const pdfDoc = new HummusRecipe('input.pdf', 'output.pdf');
const longPDF = '/longPDF.pdf';
pdfDoc
    // just page 10
    .appendPage(longPDF, 10)
    // page 4 and page 6
    .appendPage(longPDF, [4, 6])
    // page 1-3 and 6-20
    .appendPage(longPDF, [[1, 3], [6, 20]])
    // all pages
    .appendPage(longPDF)
    .endPDF();

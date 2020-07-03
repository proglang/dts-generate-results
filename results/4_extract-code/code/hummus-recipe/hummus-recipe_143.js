const HummusRecipe = require('hummus-recipe');
const pdfDoc = new HummusRecipe('input.pdf');
const outputDir = path.join(__dirname, 'output');

pdfDoc
    .split(outputDir, 'prefix')
    .endPDF();

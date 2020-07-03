const HummusRecipe = require('hummus-recipe');
const pdfDoc = new HummusRecipe('input.pdf', 'output.pdf');
pdfDoc
    // edit 1st page
    .editPage(1)
    .text('Add some texts to an existing pdf file', 150, 300)
    .rectangle(20, 20, 40, 100)
    .comment('Add 1st comment annotaion', 200, 300)
    .image('/path/to/image.jpg', 20, 100, {width: 300, keepAspectRatio: true})
    .endPage()
    // edit 2nd page
    .editPage(2)
    .comment('Add 2nd comment annotaion', 200, 100)
    .endPage()
    // end and save
    .endPDF();

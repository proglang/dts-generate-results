const htmlToText = require('html-to-text');

const text = htmlToText.fromString('<h1>Hello World</h1>', {
  wordwrap: 130
});
console.log(text); // Hello World

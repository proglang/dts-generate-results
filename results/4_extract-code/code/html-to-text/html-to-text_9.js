var htmlToText = require('html-to-text');

var text = htmlToText.fromString('<h1>Hello World</h1>', {
  format: {
    heading: function (elem, fn, options) {
      var h = fn(elem.children, options);
      return '====\n' + h.toUpperCase() + '\n====';
    }
  }
});

console.log(text);

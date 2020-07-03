var getCaretCoordinates = require('textarea-caret');

document.querySelector('textarea').addEventListener('input', function () {
  var caret = getCaretCoordinates(this, this.selectionEnd);
  console.log('(top, left, height) = (%s, %s, %s)', caret.top, caret.left, caret.height);
})

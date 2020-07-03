var FontFaceObserver = require('fontfaceobserver');

var font = new FontFaceObserver('My Family');

font.load().then(function () {
  console.log('My Family has loaded');
});

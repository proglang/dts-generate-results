const mergeImages = require('merge-images');
const Canvas = require('canvas');

mergeImages(['./body.png', './eyes.png', './mouth.png'], {
  Canvas: Canvas
})
  .then(b64 => ...);
  // data:image/png;base64,iVBORw0KGgoAA...

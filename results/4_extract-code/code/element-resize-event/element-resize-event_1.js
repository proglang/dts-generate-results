var elementResizeEvent = require('element-resize-event');

var element = document.getElementById("resize");

elementResizeEvent(element, function() {
  console.log("resized!");
  console.log(element.offsetWidth);
});

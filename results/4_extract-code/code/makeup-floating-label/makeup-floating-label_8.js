// require the module
const FloatingLabel = require('makeup-floating-label');

// get NodeList
const widgetEls = document.querySelectorAll('.floating-label');

// assign next id to each element
widgetEls.forEach(function(el) {
    var widget = new FloatingLabel(el);
});

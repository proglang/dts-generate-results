// import the module
const Expander = require('makeup-expander');

// get an element reference
const widgetEl = document.querySelector('.expander');

// options
const options = {
    expandOnClick: true
};

// get widget instance
const widget = new Expander(widgetEl, options);

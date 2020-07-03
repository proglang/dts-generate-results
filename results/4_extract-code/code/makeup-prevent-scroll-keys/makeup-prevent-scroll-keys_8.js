// require the module
const scrollKeyPreventer = require('makeup-prevent-scroll-keys');

// get element reference
const widgetEl = document.querySelector('.widget');

// execute
scrollKeyPreventer.add(el);

// to remove
scrollKeyPreventer.remove(el);


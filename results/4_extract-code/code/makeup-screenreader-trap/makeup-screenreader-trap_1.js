const screenreaderTrap = require('makeup-screenreader-trap');

// trap an element
screenreaderTrap.trap(document.querySelector('el'));

// untrap the current trapped element
screenreaderTrap.untrap();

const keyboardTrap = require('makeup-keyboard-trap');

// trap an element
keyboardTrap.trap(document.querySelector('el'));

// untrap the current trapped element
keyboardTrap.untrap();

// If requiring the module via CommonJS, either:-
Delegate = require('ftdomdelegate').Delegate;
myDel = new Delegate(document.body);

// Or:-
delegate = require('ftdomdelegate');
myDel = delegate(document.body);

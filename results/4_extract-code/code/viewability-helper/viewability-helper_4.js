// import the module
import ViewabilityHelper from 'viewability-helper';
// -or-
const ViewabilityHelper = require('viewability-helper');

// Create a new observer for an element with a callback function
const myObserver = new ViewabilityHelper(element, callback);
// Fire in the hole!
myObserver.observe();

// With options
myObserver = new ViewabilityHelper(element, callback, {callbackParams: ['Element number 1']});


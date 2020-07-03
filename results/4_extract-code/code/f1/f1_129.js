var eases = require('eases');
var ui = require('f1')();

ui.transitions( [
  { 
    from: 'idle', 
    to: 'rollOver', 
    animation: { 
      duration: 0.25,
      ease: eases.quadOut
    } 
  },
  { 
    from: 'rollOver', 
    to: 'idle', 
    animation: { 
      duration: 0.1 
      ease: eases.expoOut
    } 
  }
]);

var eases = require('eases');
var ui = require('f1')();

ui.transitions( [
  {
    from: 'out',
    to: 'idle',
    animation: { 
      duration: 1, ease: eases.expoOut,

      position: { duration: 0.5, delay: 0.5, ease: eases.quadOut },
      alpha: { duration: 0.5 }
    }
  },
  {
    from: 'idle',
    to: 'out',
    animation: { duration: 0.5, ease: eases.expoIn }
  }
]);

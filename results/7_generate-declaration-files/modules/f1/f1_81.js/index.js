var ui = require('f1')();

ui.states( {
  out: function(stateName) {
    console.log(stateName); // "out"

    return {
      itemToAnimate1: {
        variableToAnimate: 0
      },

      itemToAnimate2: {
        variableToAnimate: 0
      }
    };
  },

  idle: function(stateName) {
    console.log(stateName); // "idle"

    return {
      itemToAnimate1: {
        variableToAnimate: 1
      },

      itemToAnimate2: {
        variableToAnimate: 2
      }
    };
  }
});

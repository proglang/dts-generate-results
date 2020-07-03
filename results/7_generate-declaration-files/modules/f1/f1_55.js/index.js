var ui = require('f1')();

ui.states( {

out: {
  itemToAnimate1: {
    variableToAnimate: 0
  },

  itemToAnimate2: {
    variableToAnimate: 0
  }
},

idle: {
  itemToAnimate1: {
    variableToAnimate: 1
  },

  itemToAnimate2: {
    variableToAnimate: 2
  }
}
});

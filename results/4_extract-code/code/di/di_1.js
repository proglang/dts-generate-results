var Car = function(engine) {
  this.start = function() {
    engine.start();
  };
};

var createPetrolEngine = function(power) {
  return {
    start: function() {
      console.log('Starting engine with ' + power + 'hp');
    }
  };
};


// a module is just a plain JavaScript object
// it is a recipe for the injector, how to instantiate stuff
var module = {
  // if an object asks for 'car', the injector will call new Car(...) to produce it
  'car': ['type', Car],
  // if an object asks for 'engine', the injector will call createPetrolEngine(...) to produce it
  'engine': ['factory', createPetrolEngine],
  // if an object asks for 'power', the injector will give it number 1184
  'power': ['value', 1184] // probably Bugatti Veyron
};


var di = require('di');
var injector = new di.Injector(module);

injector.invoke(function(car) {
  car.start();
});

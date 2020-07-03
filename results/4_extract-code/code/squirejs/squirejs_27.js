var injector = new Squire();
injector.mock('CrazyCalculatorDependency', {
    sin: 10
  })
  .require(['utilities/Calculator'], function(Calculator) {
    // The Calculators dependency 'CrazyCalculatorDependency' has been mocked to
    // use the object literal { sin: 10 } that we passed in.
  });

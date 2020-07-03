var injector = new Squire();
injector
  .store('CrazyCalculatorDependency')
  .require(['utilities/Calculator', 'mocks'], function(Calculator, mocks) {
    // mocks.store.CrazyCalculatorDependency is the Calculators dependency, you can
    // manipulate it or stub it with Sinon now.
  });

var injector = new Squire();
injector.require(['utilities/Calculator'], function(Calculator) {
  // Calculator has been loaded.
},
function(err) {
  // Calculator threw an error loading.
});

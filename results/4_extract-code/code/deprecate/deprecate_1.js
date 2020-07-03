var deprecate = require('deprecate');

var someDeprecatedFunction = function() {
  deprecate('someDeprecatedFunction() is deprecated');
};

someDeprecatedFunction();
someDeprecatedFunction();
someDeprecatedFunction();
console.log('end');

//program output:

WARNING!!
someDeprecatedFunction() is deprecated


end

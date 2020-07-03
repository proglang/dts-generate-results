var getFuncName = require('get-func-name');

var unknownFunction = function myCoolFunction(word) {
   return word + 'is cool'; 
};

var anonymousFunction = (function () {
    return function () {};
}());

getFuncName(unknownFunction) // 'myCoolFunction'
getFuncName(anonymousFunction) // ''

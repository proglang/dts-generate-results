var dot = require('dot-object');

var obj = {
 some: {
   nested: {
     value: 'Hi there!'
   }
 }
};

var val = dot.pick('some.nested.value', obj);
console.log(val);

Hi there!

// Pick & Remove the value
val = dot.pick('some.nested.value', obj, true);

// shorthand
val = dot.remove('some.nested.value', obj);

// or use the alias `del`
val = dot.del('some.nested.value', obj);


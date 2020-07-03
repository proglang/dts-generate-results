var simple = require('simple-mock')

simple.mock(obj, 'example', 'value') // Replace with this value

simple.mock(obj, 'example') // Spy on underlying method *or* stub
simple.mock(obj, 'example').callFn(function () {}) // Stub
simple.mock(obj, 'example').callbackWith(null, 'etc') // Stub
simple.mock(obj, 'example').returnWith('etc') // Stub
simple.mock(obj, 'example').throwWith(new Error()) // Stub
simple.mock(obj, 'example').resolveWith('etc') // Stub
simple.mock(obj, 'example').rejectWith(new Error()) // Stub
simple.mock(obj, 'example').callOriginal() // Unstubbed call

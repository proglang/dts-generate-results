var safeJsonStringify = require('safe-json-stringify');
// Never ever do this in your code. Please.
var obj = {};
Object.defineProperty(obj, 'foo', {
    get: function() { throw new Error('ouch!'); },
        enumerable: true
});

safeJsonStringify(obj); // '{"foo":"[Throws]"}'

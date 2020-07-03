var createError    = require('create-error');

var MyCustomError  = createError('MyCustomError');
var SubCustomError = createError(MyCustomError, 'CoolSubError', {messages: []});

var sub = new SubCustomError('My Message', {someVal: 'value'});

sub instanceof SubCustomError // true
sub instanceof MyCustomError  // true
sub instanceof Error          // true

assert.deepEqual(sub.messages, []) // true
assert.equal(sub.someVal, 'value') // true

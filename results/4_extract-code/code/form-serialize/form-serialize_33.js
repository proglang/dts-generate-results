var serialize = require('form-serialize');
var form = document.querySelector('#todos-form');

var obj = serialize(form, { hash: true });
// obj -> { foo: { bar: { baz: 'qux' } }, norf: [ 'item 1' ] }


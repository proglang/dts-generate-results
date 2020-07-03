var serialize = require('form-serialize');
var form = document.querySelector('#example-form');

var str = serialize(form);
// str -> "foo=bar"

var obj = serialize(form, { hash: true });
// obj -> { foo: 'bar' }

var serialize = require('form-serialize');
var form = document.querySelector('#example-form');

var obj = serialize(form, { hash: true });
// obj -> { foo: ['bar'] }

var str = serialize(form);
// str -> "foo[]=bar"


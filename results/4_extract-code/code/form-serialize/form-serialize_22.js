var serialize = require('form-serialize');
var form = document.querySelector('#todos-form');

var obj = serialize(form, { hash: true });
// obj -> { todos: ['eggs', 'milk', 'flour'] }

var str = serialize(form);
// str -> "todos[1]=milk&todos[0]=eggs&todos[2]=flour"


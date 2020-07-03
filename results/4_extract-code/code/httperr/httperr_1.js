var httperr = require('httperr');

var err = httperr[404]('The path "/example" could not be resolved');
console.log(err);
/*
{ [NotFound: The path "/example" could not be resolved]
  title: 'Not Found',
  name: 'NotFound',
  code: 'NOT_FOUND',
  statusCode: 404,
  message: 'The path "/example" could not be resolved'
}
*/
throw err;
/*
NotFound: The path "/example" could not be resolved
    at ...
*/

console.log(httperr.methodNotAllowed({allowed: ['GET', 'POST']}));
/*
{ [MethodNotAllowed]
  title: 'Method Not Allowed',
  name: 'MethodNotAllowed',
  code: 'METHOD_NOT_ALLOWED',
  statusCode: 405,
  message: '',
  allowed: ['GET', 'POST']
}
*/

err = new httperr.NotFound();
console.log(err);
/*
{ [NotFound]
  title: 'Not Found',
  name: 'NotFound',
  code: 'NOT_FOUND',
  statusCode: 404,
  message: 'The path "/example" could not be resolved'
}
*/

console.log(err instanceof httperr.NotFound); // true
console.log(err instanceof httperr.notFound); // true
console.log(err instanceof httperr['404']); // true
console.log(err instanceof httperr.MethodNotAllowed); // false
console.log(err instanceof httperr.HttpError); // true
console.log(err instanceof Error); // true

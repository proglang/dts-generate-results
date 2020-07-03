const Response = require('responselike');

const response = new Response(200, { foo: 'bar' }, Buffer.from('Hi!'), 'https://example.com');

response.statusCode;
// 200
response.headers;
// { foo: 'bar' }
response.body;
// <Buffer 48 69 21>
response.url;
// 'https://example.com'

response.pipe(process.stdout);
// Hi!

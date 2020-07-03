const crpc = require('crpc');
const client = crpc('https://api.example.com/v1');

await client('2018-03-06/get_user', { userId: 'foo' });

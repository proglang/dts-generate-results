// your_script.js

require('dotenv-flow').config();

console.log('database host:', process.env.DATABASE_HOST);
console.log('database port:', process.env.DATABASE_PORT);
console.log('database user:', process.env.DATABASE_USER);
console.log('database pass:', process.env.DATABASE_PASS);
console.log('database name:', process.env.DATABASE_NAME);

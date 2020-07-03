const fs = require('fs');
const circuitBreaker = require('opossum');

const readFile = circuitBreaker.promisify(fs.readFile);
const breaker = circuitBreaker(readFile, options);

breaker.fire('./package.json', 'utf-8')
  .then(console.log)
  .catch(console.error);

const dotenvFlow = require('dotenv-flow');

const source = Buffer.from('FOO=bar\nBAZ=qux');
const config = dotenvFlow.parse(source);

console.log(typeof config, config); // > object { FOO: 'bar', BAZ: 'qux' }

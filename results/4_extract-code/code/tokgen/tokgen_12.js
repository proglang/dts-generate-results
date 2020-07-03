const TokenGenerator = require('tokgen');

let generator = new TokenGenerator({chars: '0-9a-f', length: 8});

let token = generator.generate();
// => '5f8ab69e'

token = generator.generate();
// => 'e5e3c24a'

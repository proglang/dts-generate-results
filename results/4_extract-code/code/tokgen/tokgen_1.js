const TokenGenerator = require('tokgen');

let generator = new TokenGenerator();

let token = generator.generate();
// => 'Q1GM0wL95xUkE2JBXzBiV75MrGTw6GAk'

token = generator.generate();
// => 'RPTXBktJl1lgHMTVQOzKVpFlR3hfOIfI'

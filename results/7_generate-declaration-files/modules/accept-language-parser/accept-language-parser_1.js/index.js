var parser = require('accept-language-parser');

var language = parser.pick(['fr-CA', 'fr-FR', 'fr'], 'en-GB,en-US;q=0.9,fr-CA;q=0.7,en;q=0.8');

console.log(language);

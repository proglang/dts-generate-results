var dotfileRegex = require('dotfile-regex');

dotfileRegex().test('a/b/c.js');
//=> false

dotfileRegex().test('./git');
//=> false

dotfileRegex().test('.git/foo');
//=> false

dotfileRegex().test('.gitignore');
//=> true

dotfileRegex().test('a/b/c/.gitignore');
//=> true

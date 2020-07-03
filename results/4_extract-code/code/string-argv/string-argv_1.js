var stringArgv = require('string-argv');
var args = stringArgv(
    '-testing test -valid=true --quotes "test quotes" "nested \'quotes\'" --key="some value" --title="Peter\'s Friends"',
    'node',
    'testing.js'
);

//legacy
var args2 = stringArgv.parseArgsStringToArgv(
    '-testing test -valid=true --quotes "test quotes" "nested \'quotes\'" --key="some value" --title="Peter\'s Friends"',
    'node',
    'testing.js'
);

console.log(args);
/** output
[ 'node',
  'testing.js',
  '-testing',
  'test',
  '-valid=true',
  '--quotes',
  'test quotes',
  'nested \'quotes\'',
  '--key="some value"',
  '--title="Peter\'s Friends"' ]
  **/

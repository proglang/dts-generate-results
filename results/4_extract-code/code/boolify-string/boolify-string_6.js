var boolifyString = require('boolify-string');

boolifyString('true');// #=> true
boolifyString('TRUE');// #=> true
boolifyString('True');// #=> true
boolifyString('false');// #=> false

boolifyString('{}');// #=> true
boolifyString('foo');// #=> true
boolifyString('');// #=> false
boolifyString('1');// #=> true
boolifyString('-1');// #=> true
boolifyString('0');// #=> false
boolifyString('[]');// #=> true
boolifyString('undefined');// #=> false
boolifyString('null');// #=> false

// primitive values as is
boolifyString(true);// #=> true
boolifyString(false);// #=> false
boolifyString({});// #=> true
boolifyString(1);// #=> true
boolifyString(-1);// #=> true
boolifyString(0);// #=> false
boolifyString([]);// #=> true
boolifyString(undefined);// #=> false
boolifyString(null);// #=> false

// string constructor
boolifyString(new String('true'));// #=> true
boolifyString(new String('false'));// #=> false

// YAML's specification
// http://yaml.org/type/bool.html
// y|Y|yes|Yes|YES|n|N|no|No|NO
// |true|True|TRUE|false|False|FALSE
// |on|On|ON|off|Off|OFF
boolifyString('y');// #=> true
boolifyString('Y');// #=> true
boolifyString('yes');// #=> true
boolifyString('Yes');// #=> true
boolifyString('YES');// #=> true
boolifyString('n');// #=> false
boolifyString('N');// #=> false
boolifyString('no');// #=> false
boolifyString('No');// #=> false
boolifyString('NO');// #=> false
boolifyString('true');// #=> true
boolifyString('True');// #=> true
boolifyString('TRUE');// #=> true
boolifyString('false');// #=> false
boolifyString('False');// #=> false
boolifyString('FALSE');// #=> false
boolifyString('on');// #=> true
boolifyString('On');// #=> true
boolifyString('ON');// #=> true
boolifyString('off');// #=> false
boolifyString('Off');// #=> false
boolifyString('OFF');// #=> false

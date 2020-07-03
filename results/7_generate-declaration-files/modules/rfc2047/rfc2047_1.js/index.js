var rfc2047 = require('rfc2047');

console.log(rfc2047.encode('Foo bar æøå ☺'));
// Foo bar =?utf-8?Q?=C3=A6=C3=B8=C3=A5?= =?utf-8?Q?_=E2=98=BA?=

console.log(rfc2047.decode('=?iso-8859-1?Q?=A1?=Hola, se=?iso-8859-1?Q?=F1?=or!'));
// ¡Hola, señor!

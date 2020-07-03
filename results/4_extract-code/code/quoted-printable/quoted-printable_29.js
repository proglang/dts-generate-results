var utf8 = require('utf8');

utf8.decode(quotedPrintable.decode('foo=3Dbar'));
// → 'foo=bar'

utf8.decode(quotedPrintable.decode('I=C3=B1t=C3=ABrn=C3=A2ti=C3=B4n=C3=A0liz=C3=A6ti=C3=B8n=E2=98=83=F0=9F=92=\r\n=A9'));
// → 'Iñtërnâtiônàlizætiøn☃💩'

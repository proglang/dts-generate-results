J$.iids = {"9":[1,15,1,22],"17":[1,23,1,32],"25":[1,15,1,33],"33":[1,15,1,33],"41":[1,15,1,33],"49":[3,1,3,8],"57":[3,13,3,20],"65":[3,28,3,43],"73":[3,13,3,44],"75":[3,13,3,27],"81":[3,1,3,45],"83":[3,1,3,12],"89":[3,1,3,46],"97":[6,1,6,8],"105":[6,13,6,20],"113":[6,28,6,81],"121":[6,13,6,82],"123":[6,13,6,27],"129":[6,1,6,83],"131":[6,1,6,12],"137":[6,1,6,84],"145":[1,1,8,1],"153":[1,1,8,1],"161":[1,1,8,1],"169":[1,1,8,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var rfc2047 = require('rfc2047');\n\nconsole.log(rfc2047.encode('Foo bar æøå ☺'));\n// Foo bar =?utf-8?Q?=C3=A6=C3=B8=C3=A5?= =?utf-8?Q?_=E2=98=BA?=\n\nconsole.log(rfc2047.decode('=?iso-8859-1?Q?=A1?=Hola, se=?iso-8859-1?Q?=F1?=or!'));\n// ¡Hola, señor!\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(145, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(153, 'rfc2047', rfc2047, 0);
            var rfc2047 = J$.X1(41, J$.W(33, 'rfc2047', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'rfc2047', 21, false)), rfc2047, 3));
            J$.X1(89, J$.M(81, J$.R(49, 'console', console, 2), 'log', 0)(J$.M(73, J$.R(57, 'rfc2047', rfc2047, 1), 'encode', 0)(J$.T(65, 'Foo bar æøå ☺', 21, false))));
            J$.X1(137, J$.M(129, J$.R(97, 'console', console, 2), 'log', 0)(J$.M(121, J$.R(105, 'rfc2047', rfc2047, 1), 'decode', 0)(J$.T(113, '=?iso-8859-1?Q?=A1?=Hola, se=?iso-8859-1?Q?=F1?=or!', 21, false))));
        } catch (J$e) {
            J$.Ex(161, J$e);
        } finally {
            if (J$.Sr(169)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

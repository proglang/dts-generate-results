J$.iids = {"9":[3,14,3,21],"17":[3,22,3,30],"25":[3,14,3,31],"33":[3,14,3,31],"41":[3,14,3,31],"49":[4,1,4,8],"57":[4,13,4,19],"65":[4,13,4,21],"73":[4,1,4,22],"75":[4,1,4,12],"81":[4,1,4,23],"89":[5,1,5,8],"97":[5,13,5,19],"105":[5,20,5,21],"113":[5,13,5,22],"121":[5,1,5,23],"123":[5,1,5,12],"129":[5,1,5,24],"137":[1,1,5,24],"145":[1,1,5,24],"153":[1,1,5,24],"161":[1,1,5,24],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"// bar.js\n\nvar caller = require('caller');\nconsole.log(caller()); // `/path/to/foo.js`\nconsole.log(caller(2));"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(137, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(145, 'caller', caller, 0);
            var caller = J$.X1(41, J$.W(33, 'caller', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'caller', 21, false)), caller, 3));
            J$.X1(81, J$.M(73, J$.R(49, 'console', console, 2), 'log', 0)(J$.F(65, J$.R(57, 'caller', caller, 1), 0)()));
            J$.X1(129, J$.M(121, J$.R(89, 'console', console, 2), 'log', 0)(J$.F(113, J$.R(97, 'caller', caller, 1), 0)(J$.T(105, 2, 22, false))));
        } catch (J$e) {
            J$.Ex(153, J$e);
        } finally {
            if (J$.Sr(161)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

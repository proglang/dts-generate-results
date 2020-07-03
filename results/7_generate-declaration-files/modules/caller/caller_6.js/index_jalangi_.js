J$.iids = {"9":[3,14,3,21],"17":[3,22,3,30],"25":[3,14,3,31],"33":[3,14,3,31],"41":[3,14,3,31],"49":[4,1,4,8],"57":[4,13,4,19],"65":[4,13,4,21],"73":[4,1,4,22],"75":[4,1,4,12],"81":[4,1,4,23],"89":[1,1,5,1],"97":[1,1,5,1],"105":[1,1,5,1],"113":[1,1,5,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"// bar.js\n\nvar caller = require('caller');\nconsole.log(caller()); // `/path/to/foo.js`\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(89, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(97, 'caller', caller, 0);
            var caller = J$.X1(41, J$.W(33, 'caller', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'caller', 21, false)), caller, 3));
            J$.X1(81, J$.M(73, J$.R(49, 'console', console, 2), 'log', 0)(J$.F(65, J$.R(57, 'caller', caller, 1), 0)()));
        } catch (J$e) {
            J$.Ex(105, J$e);
        } finally {
            if (J$.Sr(113)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

J$.iids = {"9":[1,17,1,24],"17":[1,25,1,37],"25":[1,17,1,38],"33":[1,17,1,38],"41":[1,17,1,38],"49":[3,1,3,8],"57":[3,13,3,22],"65":[3,13,3,24],"73":[3,1,3,25],"75":[3,1,3,12],"81":[3,1,3,26],"89":[1,1,5,1],"97":[1,1,5,1],"105":[1,1,5,1],"113":[1,1,5,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var isWindows = require('is-windows');\n\nconsole.log(isWindows());\n//=> returns true if the platform is windows\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(89, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(97, 'isWindows', isWindows, 0);
            var isWindows = J$.X1(41, J$.W(33, 'isWindows', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'is-windows', 21, false)), isWindows, 3));
            J$.X1(81, J$.M(73, J$.R(49, 'console', console, 2), 'log', 0)(J$.F(65, J$.R(57, 'isWindows', isWindows, 1), 0)()));
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

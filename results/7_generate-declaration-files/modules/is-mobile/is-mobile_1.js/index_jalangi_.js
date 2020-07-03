J$.iids = {"9":[1,14,1,21],"17":[1,22,1,33],"25":[1,14,1,34],"33":[1,14,1,34],"41":[1,14,1,34],"49":[3,1,3,8],"57":[3,13,3,19],"65":[3,13,3,21],"73":[3,1,3,22],"75":[3,1,3,12],"81":[3,1,3,23],"89":[1,1,5,1],"97":[1,1,5,1],"105":[1,1,5,1],"113":[1,1,5,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var mobile = require('is-mobile');\n\nconsole.log(mobile());\n// => false\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(89, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(97, 'mobile', mobile, 0);
            var mobile = J$.X1(41, J$.W(33, 'mobile', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'is-mobile', 21, false)), mobile, 3));
            J$.X1(81, J$.M(73, J$.R(49, 'console', console, 2), 'log', 0)(J$.F(65, J$.R(57, 'mobile', mobile, 1), 0)()));
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

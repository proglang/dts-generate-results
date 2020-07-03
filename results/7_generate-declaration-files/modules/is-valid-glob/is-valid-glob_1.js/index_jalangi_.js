J$.iids = {"9":[1,19,1,26],"17":[1,27,1,42],"25":[1,19,1,43],"33":[1,19,1,43],"41":[1,19,1,43],"49":[3,1,3,12],"57":[3,13,3,23],"65":[3,1,3,24],"73":[3,1,3,25],"81":[1,1,5,1],"89":[1,1,5,1],"97":[1,1,5,1],"105":[1,1,5,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var isValidGlob = require('is-valid-glob');\n\nisValidGlob('foo/*.js');\n//=> true\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(81, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(89, 'isValidGlob', isValidGlob, 0);
            var isValidGlob = J$.X1(41, J$.W(33, 'isValidGlob', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'is-valid-glob', 21, false)), isValidGlob, 3));
            J$.X1(73, J$.F(65, J$.R(49, 'isValidGlob', isValidGlob, 1), 0)(J$.T(57, 'foo/*.js', 21, false)));
        } catch (J$e) {
            J$.Ex(97, J$e);
        } finally {
            if (J$.Sr(105)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

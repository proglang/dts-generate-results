J$.iids = {"9":[1,14,1,21],"17":[1,22,1,37],"25":[1,14,1,38],"33":[1,14,1,38],"41":[1,14,1,38],"49":[2,1,2,7],"57":[2,8,2,11],"65":[2,13,2,14],"73":[2,1,2,15],"81":[2,1,2,16],"89":[1,1,4,1],"97":[1,1,4,1],"105":[1,1,4,1],"113":[1,1,4,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var repeat = require('repeat-string');\nrepeat('A', 5);\n//=> AAAAA\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(89, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(97, 'repeat', repeat, 0);
            var repeat = J$.X1(41, J$.W(33, 'repeat', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'repeat-string', 21, false)), repeat, 3));
            J$.X1(81, J$.F(73, J$.R(49, 'repeat', repeat, 1), 0)(J$.T(57, 'A', 21, false), J$.T(65, 5, 22, false)));
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

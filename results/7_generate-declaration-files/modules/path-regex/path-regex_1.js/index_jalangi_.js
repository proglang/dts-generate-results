J$.iids = {"9":[1,10,1,17],"17":[1,18,1,30],"25":[1,10,1,31],"33":[1,10,1,31],"41":[1,10,1,31],"49":[3,1,3,19],"57":[3,26,3,28],"65":[3,26,3,30],"73":[3,1,3,31],"75":[3,1,3,25],"81":[3,1,3,32],"89":[1,1,12,1],"97":[1,1,12,1],"105":[1,1,12,1],"113":[1,1,12,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var re = require('path-regex');\n\n'a/b.c/d/e.min.js'.match(re());\n\n//=> [0] 'a/b.c/d/e.min.js'\n//=> [1] 'a/b.c/d/'\n//=> [2] 'e.min.js'\n//=> [3] 'e'\n//=> [4] '.min.js'\n//=> [5] '.js'\n//=> [6] 'js'\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(89, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(97, 're', re, 0);
            var re = J$.X1(41, J$.W(33, 're', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'path-regex', 21, false)), re, 3));
            J$.X1(81, J$.M(73, J$.T(49, 'a/b.c/d/e.min.js', 21, false), 'match', 0)(J$.F(65, J$.R(57, 're', re, 1), 0)()));
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

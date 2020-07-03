J$.iids = {"9":[1,18,1,25],"17":[1,26,1,39],"25":[1,18,1,40],"33":[1,18,1,40],"41":[1,18,1,40],"49":[3,1,3,11],"57":[3,12,3,22],"65":[3,1,3,23],"73":[3,1,3,24],"81":[5,1,5,11],"89":[5,12,5,23],"97":[5,1,5,24],"105":[5,1,5,25],"113":[1,1,7,1],"121":[1,1,7,1],"129":[1,1,7,1],"137":[1,1,7,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var isAbsolute = require('is-absolute');\n\nisAbsolute('a/b/c.js');\n//=> 'false'\nisAbsolute('/a/b/c.js');\n//=> 'true'\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(113, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(121, 'isAbsolute', isAbsolute, 0);
            var isAbsolute = J$.X1(41, J$.W(33, 'isAbsolute', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'is-absolute', 21, false)), isAbsolute, 3));
            J$.X1(73, J$.F(65, J$.R(49, 'isAbsolute', isAbsolute, 1), 0)(J$.T(57, 'a/b/c.js', 21, false)));
            J$.X1(105, J$.F(97, J$.R(81, 'isAbsolute', isAbsolute, 1), 0)(J$.T(89, '/a/b/c.js', 21, false)));
        } catch (J$e) {
            J$.Ex(129, J$e);
        } finally {
            if (J$.Sr(137)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

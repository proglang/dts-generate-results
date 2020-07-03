J$.iids = {"9":[1,17,1,24],"17":[1,25,1,41],"25":[1,17,1,42],"33":[1,17,1,42],"41":[1,17,1,42],"49":[3,1,3,8],"57":[3,13,3,22],"65":[3,23,3,42],"73":[3,13,3,43],"81":[3,1,3,44],"83":[3,1,3,12],"89":[3,1,3,45],"97":[1,1,5,1],"105":[1,1,5,1],"113":[1,1,5,1],"121":[1,1,5,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var normalize = require('normalize-path');\n\nconsole.log(normalize('\\\\foo\\\\bar\\\\baz\\\\')); \n//=> '/foo/bar/baz'\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(97, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(105, 'normalize', normalize, 0);
            var normalize = J$.X1(41, J$.W(33, 'normalize', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'normalize-path', 21, false)), normalize, 3));
            J$.X1(89, J$.M(81, J$.R(49, 'console', console, 2), 'log', 0)(J$.F(73, J$.R(57, 'normalize', normalize, 1), 0)(J$.T(65, '\\foo\\bar\\baz\\', 21, false))));
        } catch (J$e) {
            J$.Ex(113, J$e);
        } finally {
            if (J$.Sr(121)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

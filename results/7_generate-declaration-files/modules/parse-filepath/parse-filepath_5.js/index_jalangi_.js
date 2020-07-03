J$.iids = {"9":[1,17,1,24],"17":[1,25,1,41],"25":[1,17,1,42],"33":[1,17,1,42],"41":[1,17,1,42],"49":[2,1,2,8],"57":[2,13,2,22],"65":[2,23,2,45],"73":[2,13,2,46],"81":[2,1,2,47],"83":[2,1,2,12],"89":[2,1,2,48],"97":[1,1,3,1],"105":[1,1,3,1],"113":[1,1,3,1],"121":[1,1,3,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var parsePath = require('parse-filepath');\nconsole.log(parsePath('foo/bar/baz/index.js'));\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(97, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(105, 'parsePath', parsePath, 0);
            var parsePath = J$.X1(41, J$.W(33, 'parsePath', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'parse-filepath', 21, false)), parsePath, 3));
            J$.X1(89, J$.M(81, J$.R(49, 'console', console, 2), 'log', 0)(J$.F(73, J$.R(57, 'parsePath', parsePath, 1), 0)(J$.T(65, 'foo/bar/baz/index.js', 21, false))));
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

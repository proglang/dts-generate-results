J$.iids = {"9":[1,20,1,27],"17":[1,28,1,44],"25":[1,20,1,45],"33":[1,20,1,45],"41":[1,20,1,45],"49":[3,1,3,13],"57":[3,14,3,22],"65":[3,24,3,30],"73":[3,1,3,31],"81":[3,1,3,31],"89":[4,1,4,13],"97":[4,14,4,20],"105":[4,22,4,30],"113":[4,1,4,31],"121":[4,1,4,31],"129":[1,1,5,1],"137":[1,1,5,1],"145":[1,1,5,1],"153":[1,1,5,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var pathIsInside = require(\"path-is-inside\");\n\npathIsInside(\"/x/y/z\", \"/x/y\") // true\npathIsInside(\"/x/y\", \"/x/y/z\") // false\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(129, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(137, 'pathIsInside', pathIsInside, 0);
            var pathIsInside = J$.X1(41, J$.W(33, 'pathIsInside', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, "path-is-inside", 21, false)), pathIsInside, 3));
            J$.X1(81, J$.F(73, J$.R(49, 'pathIsInside', pathIsInside, 1), 0)(J$.T(57, "/x/y/z", 21, false), J$.T(65, "/x/y", 21, false)));
            J$.X1(121, J$.F(113, J$.R(89, 'pathIsInside', pathIsInside, 1), 0)(J$.T(97, "/x/y", 21, false), J$.T(105, "/x/y/z", 21, false)));
        } catch (J$e) {
            J$.Ex(145, J$e);
        } finally {
            if (J$.Sr(153)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

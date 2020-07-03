J$.iids = {"9":[1,12,1,19],"17":[1,20,1,33],"25":[1,12,1,34],"33":[1,12,1,43],"35":[1,12,1,41],"41":[1,12,1,43],"49":[1,12,1,43],"57":[2,1,2,8],"65":[2,13,2,17],"73":[2,13,2,26],"75":[2,13,2,24],"81":[2,1,2,27],"83":[2,1,2,12],"89":[2,1,2,28],"97":[1,1,3,1],"105":[1,1,3,1],"113":[1,1,3,1],"121":[1,1,3,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var math = require('random-seed').create();\nconsole.log(math.random());\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(97, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(105, 'math', math, 0);
            var math = J$.X1(49, J$.W(41, 'math', J$.M(33, J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'random-seed', 21, false)), 'create', 0)(), math, 3));
            J$.X1(89, J$.M(81, J$.R(57, 'console', console, 2), 'log', 0)(J$.M(73, J$.R(65, 'math', math, 1), 'random', 0)()));
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

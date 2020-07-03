J$.iids = {"9":[1,13,1,20],"17":[1,21,1,32],"25":[1,13,1,33],"33":[1,13,1,33],"41":[1,13,1,33],"49":[3,1,3,6],"57":[3,8,3,11],"65":[3,7,3,12],"73":[3,15,3,18],"81":[3,20,3,23],"89":[3,14,3,24],"97":[3,27,3,30],"105":[3,32,3,35],"113":[3,37,3,40],"121":[3,26,3,41],"129":[3,1,3,42],"137":[3,1,3,43],"145":[1,1,5,1],"153":[1,1,5,1],"161":[1,1,5,1],"169":[1,1,5,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var union = require('arr-union');\n\nunion(['a'], ['b', 'c'], ['d', 'e', 'f']);\n//=> ['a', 'b', 'c', 'd', 'e', 'f']\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(145, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(153, 'union', union, 0);
            var union = J$.X1(41, J$.W(33, 'union', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'arr-union', 21, false)), union, 3));
            J$.X1(137, J$.F(129, J$.R(49, 'union', union, 1), 0)(J$.T(65, [J$.T(57, 'a', 21, false)], 10, false), J$.T(89, [
                J$.T(73, 'b', 21, false),
                J$.T(81, 'c', 21, false)
            ], 10, false), J$.T(121, [
                J$.T(97, 'd', 21, false),
                J$.T(105, 'e', 21, false),
                J$.T(113, 'f', 21, false)
            ], 10, false)));
        } catch (J$e) {
            J$.Ex(161, J$e);
        } finally {
            if (J$.Sr(169)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

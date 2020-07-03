J$.iids = {"9":[1,19,1,26],"17":[1,27,1,43],"25":[1,19,1,44],"33":[1,19,1,44],"41":[1,19,1,44],"49":[3,1,3,12],"57":[3,13,3,21],"65":[3,23,3,32],"73":[3,1,3,33],"81":[3,1,3,34],"89":[1,1,5,1],"97":[1,1,5,1],"105":[1,1,5,1],"113":[1,1,5,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var levenshtein = require('js-levenshtein');\n\nlevenshtein('kitten', 'sitting');\n//=> 3\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(89, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(97, 'levenshtein', levenshtein, 0);
            var levenshtein = J$.X1(41, J$.W(33, 'levenshtein', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'js-levenshtein', 21, false)), levenshtein, 3));
            J$.X1(81, J$.F(73, J$.R(49, 'levenshtein', levenshtein, 1), 0)(J$.T(57, 'kitten', 21, false), J$.T(65, 'sitting', 21, false)));
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

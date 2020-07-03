J$.iids = {"9":[1,19,1,26],"17":[1,27,1,45],"25":[1,19,1,46],"33":[1,19,1,46],"41":[1,19,1,46],"49":[3,1,3,12],"57":[3,17,3,31],"65":[3,33,3,48],"73":[3,65,3,69],"81":[3,50,3,70],"89":[3,1,3,71],"91":[3,1,3,16],"97":[3,1,3,72],"105":[1,1,5,1],"113":[1,1,5,1],"121":[1,1,5,1],"129":[1,1,5,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var levenshtein = require('fast-levenshtein');\n\nlevenshtein.get('mikailovitch', 'Mikhaïlovitch', { useCollator: true});\n// 1\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(105, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(113, 'levenshtein', levenshtein, 0);
            var levenshtein = J$.X1(41, J$.W(33, 'levenshtein', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'fast-levenshtein', 21, false)), levenshtein, 3));
            J$.X1(97, J$.M(89, J$.R(49, 'levenshtein', levenshtein, 1), 'get', 0)(J$.T(57, 'mikailovitch', 21, false), J$.T(65, 'Mikhaïlovitch', 21, false), J$.T(81, {
                useCollator: J$.T(73, true, 23, false)
            }, 11, false)));
        } catch (J$e) {
            J$.Ex(121, J$e);
        } finally {
            if (J$.Sr(129)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

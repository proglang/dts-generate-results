J$.iids = {"9":[1,19,1,26],"17":[1,27,1,45],"25":[1,19,1,46],"33":[1,19,1,46],"41":[1,19,1,46],"49":[3,16,3,27],"57":[3,32,3,38],"65":[3,40,3,46],"73":[3,16,3,47],"75":[3,16,3,31],"81":[3,16,3,47],"89":[3,16,3,47],"97":[4,16,4,27],"105":[4,32,4,37],"113":[4,39,4,44],"121":[4,16,4,45],"123":[4,16,4,31],"129":[4,16,4,45],"137":[4,16,4,45],"145":[1,1,5,1],"153":[1,1,5,1],"161":[1,1,5,1],"169":[1,1,5,1],"177":[1,1,5,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var levenshtein = require('fast-levenshtein');\n\nvar distance = levenshtein.get('back', 'book');   // 2\nvar distance = levenshtein.get('我愛你', '我叫你');   // 1\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(145, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(153, 'levenshtein', levenshtein, 0);
            J$.N(161, 'distance', distance, 0);
            var levenshtein = J$.X1(41, J$.W(33, 'levenshtein', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'fast-levenshtein', 21, false)), levenshtein, 3));
            var distance = J$.X1(89, J$.W(81, 'distance', J$.M(73, J$.R(49, 'levenshtein', levenshtein, 1), 'get', 0)(J$.T(57, 'back', 21, false), J$.T(65, 'book', 21, false)), distance, 3));
            var distance = J$.X1(137, J$.W(129, 'distance', J$.M(121, J$.R(97, 'levenshtein', levenshtein, 1), 'get', 0)(J$.T(105, '我愛你', 21, false), J$.T(113, '我叫你', 21, false)), distance, 3));
        } catch (J$e) {
            J$.Ex(169, J$e);
        } finally {
            if (J$.Sr(177)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

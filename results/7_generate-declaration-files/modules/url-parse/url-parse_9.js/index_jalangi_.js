J$.iids = {"9":[1,1,1,13],"17":[1,1,1,14],"25":[3,13,3,20],"33":[3,21,3,32],"41":[3,13,3,33],"49":[4,11,4,16],"57":[4,17,4,45],"65":[4,47,4,51],"73":[4,11,4,52],"81":[3,13,3,33],"89":[3,13,3,33],"97":[4,11,4,52],"105":[4,11,4,52],"113":[1,1,5,1],"121":[1,1,5,1],"129":[1,1,5,1],"137":[1,1,5,1],"145":[1,1,5,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"'use strict';\n\nvar parse = require('url-parse')\n  , url = parse('https://github.com/foo/bar', true);\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(113, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(121, 'parse', parse, 0);
            J$.N(129, 'url', url, 0);
            J$.X1(17, J$.T(9, 'use strict', 21, false));
            var parse = J$.X1(89, J$.W(81, 'parse', J$.F(41, J$.R(25, 'require', require, 2), 0)(J$.T(33, 'url-parse', 21, false)), parse, 3)), url = J$.X1(105, J$.W(97, 'url', J$.F(73, J$.R(49, 'parse', parse, 1), 0)(J$.T(57, 'https://github.com/foo/bar', 21, false), J$.T(65, true, 23, false)), url, 3));
        } catch (J$e) {
            J$.Ex(137, J$e);
        } finally {
            if (J$.Sr(145)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

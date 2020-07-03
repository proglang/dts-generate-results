J$.iids = {"9":[1,21,1,28],"17":[1,29,1,45],"25":[1,21,1,46],"33":[1,21,1,46],"41":[1,21,1,46],"49":[3,14,3,55],"57":[3,14,3,55],"65":[3,14,3,55],"73":[6,17,6,30],"81":[6,31,6,37],"89":[6,39,6,41],"97":[6,17,6,42],"105":[6,17,6,42],"113":[6,17,6,42],"121":[1,1,7,1],"129":[1,1,7,1],"137":[1,1,7,1],"145":[1,1,7,1],"153":[1,1,7,1],"161":[1,1,7,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var smartTruncate = require('smart-truncate');\n\nvar string = 'To iterate is human, to recurse divine.';\n\n// Append an ellipsis at the end of the truncated string.\nvar truncated = smartTruncate(string, 15);\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(121, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(129, 'smartTruncate', smartTruncate, 0);
            J$.N(137, 'string', string, 0);
            J$.N(145, 'truncated', truncated, 0);
            var smartTruncate = J$.X1(41, J$.W(33, 'smartTruncate', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'smart-truncate', 21, false)), smartTruncate, 3));
            var string = J$.X1(65, J$.W(57, 'string', J$.T(49, 'To iterate is human, to recurse divine.', 21, false), string, 3));
            var truncated = J$.X1(113, J$.W(105, 'truncated', J$.F(97, J$.R(73, 'smartTruncate', smartTruncate, 1), 0)(J$.R(81, 'string', string, 1), J$.T(89, 15, 22, false)), truncated, 3));
        } catch (J$e) {
            J$.Ex(153, J$e);
        } finally {
            if (J$.Sr(161)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

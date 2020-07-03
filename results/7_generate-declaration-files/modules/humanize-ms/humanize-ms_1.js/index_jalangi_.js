J$.iids = {"9":[1,10,1,17],"17":[1,18,1,31],"25":[1,10,1,32],"33":[1,10,1,32],"41":[1,10,1,32],"49":[3,1,3,3],"57":[3,4,3,8],"65":[3,1,3,9],"73":[3,1,3,9],"81":[4,1,4,3],"89":[4,4,4,8],"97":[4,1,4,9],"105":[4,1,4,9],"113":[1,1,5,1],"121":[1,1,5,1],"129":[1,1,5,1],"137":[1,1,5,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var ms = require('humanize-ms');\n\nms('1s') // 1000\nms(1000) // 1000\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(113, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(121, 'ms', ms, 0);
            var ms = J$.X1(41, J$.W(33, 'ms', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'humanize-ms', 21, false)), ms, 3));
            J$.X1(73, J$.F(65, J$.R(49, 'ms', ms, 1), 0)(J$.T(57, '1s', 21, false)));
            J$.X1(105, J$.F(97, J$.R(81, 'ms', ms, 1), 0)(J$.T(89, 1000, 22, false)));
        } catch (J$e) {
            J$.Ex(129, J$e);
        } finally {
            if (J$.Sr(137)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

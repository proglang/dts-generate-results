J$.iids = {"9":[1,12,1,19],"17":[1,20,1,26],"25":[1,12,1,27],"33":[1,12,1,27],"41":[1,12,1,27],"49":[3,1,3,5],"57":[3,14,3,19],"65":[3,1,3,20],"67":[3,1,3,13],"73":[3,1,3,21],"81":[4,1,4,5],"89":[4,19,4,31],"97":[4,1,4,32],"99":[4,1,4,18],"105":[4,1,4,33],"113":[1,1,6,1],"121":[1,1,6,1],"129":[1,1,6,1],"137":[1,1,6,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var mime = require('mime');\n\nmime.getType('txt');                    // ⇨ 'text/plain'\nmime.getExtension('text/plain');        // ⇨ 'txt'\n\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(113, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(121, 'mime', mime, 0);
            var mime = J$.X1(41, J$.W(33, 'mime', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'mime', 21, false)), mime, 3));
            J$.X1(73, J$.M(65, J$.R(49, 'mime', mime, 1), 'getType', 0)(J$.T(57, 'txt', 21, false)));
            J$.X1(105, J$.M(97, J$.R(81, 'mime', mime, 1), 'getExtension', 0)(J$.T(89, 'text/plain', 21, false)));
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

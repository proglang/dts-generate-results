J$.iids = {"9":[1,11,1,18],"17":[1,19,1,29],"25":[1,11,1,30],"33":[1,11,1,30],"41":[1,11,1,30],"49":[3,1,3,8],"57":[3,13,3,16],"65":[3,21,3,23],"73":[3,13,3,24],"75":[3,13,3,20],"81":[3,1,3,25],"83":[3,1,3,12],"89":[3,1,3,26],"97":[4,1,4,8],"105":[4,13,4,16],"113":[4,24,4,26],"121":[4,13,4,27],"123":[4,13,4,23],"129":[4,1,4,28],"131":[4,1,4,12],"137":[4,1,4,29],"145":[5,1,5,8],"153":[5,13,5,16],"161":[5,27,5,29],"169":[5,13,5,30],"171":[5,13,5,26],"177":[5,1,5,31],"179":[5,1,5,12],"185":[5,1,5,32],"193":[6,1,6,8],"201":[6,13,6,16],"209":[6,24,6,26],"217":[6,13,6,27],"219":[6,13,6,23],"225":[6,1,6,28],"227":[6,1,6,12],"233":[6,1,6,29],"241":[1,1,7,1],"249":[1,1,7,1],"257":[1,1,7,1],"265":[1,1,7,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var FNV = require('fnv-lite');\n\nconsole.log(FNV.hex('')); // 6c62272e07bb014262b821756295c58d\nconsole.log(FNV.base64('')); // bGInLge7AUJiuCF1YpXFjQ==\nconsole.log(FNV.base64Url('')); // bGInLge7AUJiuCF1YpXFjQ\nconsole.log(FNV.base36('')); // 6ezv16m7wweombnkd3ldlii6l\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(241, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(249, 'FNV', FNV, 0);
            var FNV = J$.X1(41, J$.W(33, 'FNV', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'fnv-lite', 21, false)), FNV, 3));
            J$.X1(89, J$.M(81, J$.R(49, 'console', console, 2), 'log', 0)(J$.M(73, J$.R(57, 'FNV', FNV, 1), 'hex', 0)(J$.T(65, '', 21, false))));
            J$.X1(137, J$.M(129, J$.R(97, 'console', console, 2), 'log', 0)(J$.M(121, J$.R(105, 'FNV', FNV, 1), 'base64', 0)(J$.T(113, '', 21, false))));
            J$.X1(185, J$.M(177, J$.R(145, 'console', console, 2), 'log', 0)(J$.M(169, J$.R(153, 'FNV', FNV, 1), 'base64Url', 0)(J$.T(161, '', 21, false))));
            J$.X1(233, J$.M(225, J$.R(193, 'console', console, 2), 'log', 0)(J$.M(217, J$.R(201, 'FNV', FNV, 1), 'base36', 0)(J$.T(209, '', 21, false))));
        } catch (J$e) {
            J$.Ex(257, J$e);
        } finally {
            if (J$.Sr(265)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
